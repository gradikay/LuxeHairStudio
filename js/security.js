/* ========================================
   SECURITY & PROTECTION SCRIPT
   Protects against inspection tools and content copying
   ======================================== */

(function() {
    'use strict';

    // Mobile detection function
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
               window.innerWidth <= 768;
    }

    // Disable right-click context menu (only on desktop)
    if (!isMobile()) {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    }

    // Disable text selection (only on desktop)
    if (!isMobile()) {
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        });
    }

    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
    document.addEventListener('keydown', function(e) {
        // F12 (Developer Tools)
        if (e.keyCode === 123) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+S (Save Page)
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+A (Select All)
        if (e.ctrlKey && e.keyCode === 65) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+C (Copy)
        if (e.ctrlKey && e.keyCode === 67) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+V (Paste)
        if (e.ctrlKey && e.keyCode === 86) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+X (Cut)
        if (e.ctrlKey && e.keyCode === 88) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+P (Print)
        if (e.ctrlKey && e.keyCode === 80) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        
        // Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    // Detect developer tools (only on desktop)

    if (!isMobile()) {
        let devtools = {
            open: false,
            orientation: null
        };

        const threshold = 160;

        setInterval(function() {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    // Show warning when dev tools detected (no redirect on mobile)
                    console.warn('Developer tools detected.');
                }
            } else {
                devtools.open = false;
            }
        }, 500);
    }

    // Console warning message
    console.clear();
    console.log('%cSTOP!', 'color: red; font-size: 50px; font-weight: bold;');
    console.log('%cThis is a browser feature intended for developers. Content is protected.', 'color: red; font-size: 16px;');

    // Clear console periodically
    setInterval(function() {
        console.clear();
        console.log('%cSTOP!', 'color: red; font-size: 50px; font-weight: bold;');
        console.log('%cThis is a browser feature intended for developers. Content is protected.', 'color: red; font-size: 16px;');
    }, 1000);

    // Disable image dragging
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('img');
        images.forEach(function(img) {
            img.setAttribute('draggable', 'false');
            img.style.userSelect = 'none';
            img.style.webkitUserSelect = 'none';
            img.style.mozUserSelect = 'none';
            img.style.msUserSelect = 'none';
        });
    });

    // Disable printing
    window.addEventListener('beforeprint', function(e) {
        e.preventDefault();
        alert('Printing is disabled for this page.');
        return false;
    });

    // Additional protection against common inspection methods
    Object.defineProperty(window, 'console', {
        value: console,
        writable: false,
        configurable: false
    });

    // Detect if page is loaded in iframe (common inspection technique)
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }

    // Blur content when window loses focus (only on desktop)
    if (!isMobile()) {
        let blurTimer;
        window.addEventListener('blur', function() {
            clearTimeout(blurTimer);
            blurTimer = setTimeout(function() {
                document.body.style.filter = 'blur(3px)';
            }, 200);
        });

        window.addEventListener('focus', function() {
            clearTimeout(blurTimer);
            document.body.style.filter = 'none';
        });
    }

    // Disable Ctrl+Shift+K (Firefox console)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
            e.preventDefault();
            return false;
        }
    });

    // Random page elements change to detect tampering
    let securityCheck = setInterval(function() {
        if (!document.querySelector('.navbar') || !document.querySelector('.hero')) {
            document.body.innerHTML = '<h1>Security violation detected</h1>';
            clearInterval(securityCheck);
        }
    }, 5000);

})();