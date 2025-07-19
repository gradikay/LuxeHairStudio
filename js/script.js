/* ========================================
   NAVIGATION & MOBILE MENU FUNCTIONALITY
   ======================================== */

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const appointmentForm = document.getElementById('appointmentForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking/touching nav link
navLinks.forEach(link => {
    // Mouse click
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
    
    // Touch events for mobile
    link.addEventListener('touchend', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ========================================
   SMOOTH SCROLLING & NAVIGATION
   ======================================== */

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Active Navigation Link Update
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(255, 105, 180, 0.2)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .gallery-item, .info-item, .interior-item');
    
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Form Submission Handler
appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(appointmentForm);
    const data = Object.fromEntries(formData);
    
    // Basic form validation
    if (!data.name || !data.email || !data.phone || !data.service || !data.date) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(data.phone.replace(/\D/g, ''))) {
        showNotification('Please enter a valid phone number.', 'error');
        return;
    }
    
    // Date validation (must be future date)
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showNotification('Please select a future date for your appointment.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Booking request submitted successfully! We\'ll contact you soon to confirm your appointment.', 'success');
    
    // Reset form
    appointmentForm.reset();
    
    // In a real application, you would send this data to a server
    console.log('Appointment Data:', data);
});

// Notification Function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #4CAF50, #45a049)' : 
                     type === 'error' ? 'linear-gradient(135deg, #f44336, #da190b)' : 
                     'linear-gradient(135deg, #ff69b4, #ffb6c1)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    
    // Add notification to page
    document.body.appendChild(notification);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Gallery Image Lazy Loading
const galleryImages = document.querySelectorAll('.gallery-item img, .service-image img, .hero-image img, .about-image img, .interior-item img');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            imageObserver.unobserve(img);
        }
    });
});

galleryImages.forEach(img => {
    img.style.opacity = '0';
    imageObserver.observe(img);
    
    // Add load event listener
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px) rotate(-5deg)`;
    }
});

// Date Input Minimum Date Setup
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        // Set minimum date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDate = tomorrow.toISOString().split('T')[0];
        dateInput.setAttribute('min', minDate);
    }
});

// Mobile-first Effects for Service Cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    // Mouse events for desktop
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
    
    // Touch events for mobile
    card.addEventListener('touchstart', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('touchend', () => {
        setTimeout(() => {
            card.style.transform = 'translateY(0) scale(1)';
        }, 300);
    });
});

// Gallery Item Click to Enlarge (Modal functionality) - Mobile First
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    // Mouse events
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const modal = createImageModal(img.src, img.alt);
        document.body.appendChild(modal);
    });
    
    // Touch events for mobile
    item.addEventListener('touchend', (e) => {
        e.preventDefault();
        const img = item.querySelector('img');
        const modal = createImageModal(img.src, img.alt);
        document.body.appendChild(modal);
    });
    
    // Touch hover effect
    item.addEventListener('touchstart', () => {
        item.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('touchend', () => {
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 300);
    });
});

// Create Image Modal
function createImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-backdrop">
            <div class="modal-content">
                <img src="${src}" alt="${alt}">
                <button class="modal-close">&times;</button>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    // Add event listeners
    const backdrop = modal.querySelector('.modal-backdrop');
    const closeBtn = modal.querySelector('.modal-close');
    
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            modal.remove();
        }
    });
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
    
    return modal;
}

// Add modal styles to document
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .modal-backdrop {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        cursor: pointer;
    }
    
    .modal-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        cursor: default;
    }
    
    .modal-content img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(255, 105, 180, 0.3);
    }
    
    .modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: rgba(255, 105, 180, 0.8);
        border: none;
        color: white;
        font-size: 2rem;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .modal-close:hover {
        background: rgba(255, 105, 180, 1);
        transform: scale(1.1);
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(modalStyles);

/* ========================================
   HERO CAROUSEL FUNCTIONALITY
   ======================================== */
class HeroCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.hero-slide');
        this.dots = document.querySelectorAll('.hero-dot');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.preventImageZoom();
        this.startAutoPlay();
    }
    
    preventImageZoom() {
        const carouselImages = document.querySelectorAll('.hero-slide img');
        
        carouselImages.forEach(img => {
            // Prevent context menu and long press actions
            img.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                return false;
            });
            
            // Prevent drag and drop
            img.addEventListener('dragstart', (e) => {
                e.preventDefault();
                return false;
            });
            
            // Prevent selection
            img.addEventListener('selectstart', (e) => {
                e.preventDefault();
                return false;
            });
        });
    }
    
    bindEvents() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Touch/swipe support for mobile
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let isDragging = false;
        
        const carousel = document.querySelector('.hero-carousel');
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
            this.stopAutoPlay();
        });
        
        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
            
            // Check if this is a vertical scroll
            const deltaY = Math.abs(currentY - startY);
            const deltaX = Math.abs(currentX - startX);
            
            // If vertical movement is greater than horizontal, allow scroll
            if (deltaY > deltaX && deltaY > 10) {
                isDragging = false;
                return;
            }
            
            // Prevent horizontal scroll on carousel
            if (deltaX > 10) {
                e.preventDefault();
            }
        });
        
        carousel.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
            this.startAutoPlay();
        });
        
        // Pause on hover
        carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    updateCarousel() {
        // Update slides
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
    }
    
    prevSlide() {
        this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.updateCarousel();
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000); // Change slide every 4 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Initialize hero carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.hero-carousel')) {
        const heroCarousel = new HeroCarousel();
    }
});

/* ========================================
   WEBSITE INITIALIZATION
   ======================================== */

// Website ready notification
console.log('Hair salon website ready to serve on http://0.0.0.0:5000');

// Smooth loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
const countElements = document.querySelectorAll('[data-count]');
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const target = parseInt(element.dataset.count);
            animateCount(element, target);
            countObserver.unobserve(element);
        }
    });
});

countElements.forEach(el => countObserver.observe(el));

function animateCount(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 20);
}

// Back to top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
</svg>`;
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff69b4, #ffb6c1, #ff1493);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(255, 105, 180, 0.4);
    overflow: hidden;
`;

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Add touch and hover effects to back to top button
function addButtonEffect(element) {
    element.style.transform = 'scale(1.1)';
    element.style.boxShadow = '0 12px 35px rgba(255, 105, 180, 0.6)';
}

function removeButtonEffect(element) {
    element.style.transform = 'scale(1)';
    element.style.boxShadow = '0 8px 25px rgba(255, 105, 180, 0.4)';
}

// Mouse events
backToTopButton.addEventListener('mouseenter', () => addButtonEffect(backToTopButton));
backToTopButton.addEventListener('mouseleave', () => removeButtonEffect(backToTopButton));

// Touch events for mobile
backToTopButton.addEventListener('touchstart', () => addButtonEffect(backToTopButton));
backToTopButton.addEventListener('touchend', () => removeButtonEffect(backToTopButton));

// Store Hours Status System
class StoreHoursManager {
    constructor() {
        this.storeData = null;
        this.statusElement = document.getElementById('store-status-text');
        this.hoursElement = document.getElementById('store-hours-today');
        this.nextChangeElement = document.getElementById('next-status-change');
        this.countdownElement = document.getElementById('countdown-timer');
        this.timerHours = document.getElementById('timer-hours');
        this.timerMinutes = document.getElementById('timer-minutes');
        this.timerSeconds = document.getElementById('timer-seconds');
        this.statusIcon = document.getElementById('status-icon');
        this.bellIcon = this.statusIcon.querySelector('.bell-icon');
        this.clockIcon = this.statusIcon.querySelector('.clock-icon');
        this.countdownInterval = null;
        this.init();
    }

    async init() {
        try {
            await this.loadStoreHours();
            this.updateStatus();
            // Update every minute
            setInterval(() => this.updateStatus(), 60000);
            // Update countdown every second
            setInterval(() => this.updateCountdown(), 1000);
        } catch (error) {
            console.error('Failed to load store hours:', error);
            this.showError();
        }
    }

    async loadStoreHours() {
        const response = await fetch('./store-hours.json?v=' + Date.now());
        if (!response.ok) {
            throw new Error('Failed to fetch store hours');
        }
        this.storeData = await response.json();
    }

    getCurrentDay() {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return days[new Date().getDay()];
    }

    getCurrentTime() {
        const now = new Date();
        const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            timeString: timeString
        };
    }

    timeStringToMinutes(timeString) {
        const [hours, minutes] = timeString.split(':').map(Number);
        return hours * 60 + minutes;
    }

    minutesToTimeString(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
        return `${displayHours}:${mins.toString().padStart(2, '0')} ${ampm}`;
    }

    isHoliday() {
        const today = new Date().toISOString().split('T')[0];
        return this.storeData.specialHours.holidays.find(holiday => holiday.date === today);
    }

    isVacation() {
        const today = new Date().toISOString().split('T')[0];
        return this.storeData.specialHours.vacation.find(vacation => 
            today >= vacation.startDate && today <= vacation.endDate
        );
    }

    updateStatus() {
        if (!this.storeData) return;

        const currentDay = this.getCurrentDay();
        const currentTime = this.getCurrentTime();
        const currentMinutes = currentTime.hours * 60 + currentTime.minutes;

        // Check for special circumstances first
        const holiday = this.isHoliday();
        if (holiday && !holiday.isOpen) {
            this.setStatus('holiday', this.storeData.messages.holiday, `Closed for ${holiday.name}`, '');
            return;
        }

        const vacation = this.isVacation();
        if (vacation) {
            this.setStatus('vacation', this.storeData.messages.vacation, vacation.reason, '');
            return;
        }

        const todayHours = this.storeData.hours[currentDay];
        
        if (!todayHours.isOpen) {
            this.setStatus('closed', this.storeData.messages.closed, 'Closed today', this.getNextOpenTime());
            return;
        }

        const openMinutes = this.timeStringToMinutes(todayHours.openTime);
        const closeMinutes = this.timeStringToMinutes(todayHours.closeTime);
        const closingSoonThreshold = this.storeData.closingSoonWarning;

        if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
            // Store is open
            const minutesUntilClose = closeMinutes - currentMinutes;
            if (minutesUntilClose <= closingSoonThreshold) {
                const closeTime = this.minutesToTimeString(closeMinutes);
                this.setStatus('closing-soon', this.storeData.messages.closingSoon, 
                    `Open until ${closeTime}`, `Closing in ${minutesUntilClose} minutes`);
            } else {
                const closeTime = this.minutesToTimeString(closeMinutes);
                this.setStatus('open', this.storeData.messages.open, 
                    `Open until ${closeTime}`, '');
            }
        } else if (currentMinutes < openMinutes) {
            // Store is closed but will open today
            const minutesUntilOpen = openMinutes - currentMinutes;
            const openTime = this.minutesToTimeString(openMinutes);
            if (minutesUntilOpen <= 60) {
                this.setStatus('opening-soon', this.storeData.messages.openingSoon, 
                    `Opening at ${openTime}`, `Opening in ${minutesUntilOpen} minutes`);
            } else {
                this.setStatus('closed', this.storeData.messages.closed, 
                    `Opening at ${openTime}`, '');
            }
        } else {
            // Store is closed for the day
            this.setStatus('closed', this.storeData.messages.closed, 'Closed for today', this.getNextOpenTime());
        }

        this.updateTodayHours(todayHours);
        
        // Always update countdown timer after status update
        this.updateCountdown();
    }

    setStatus(statusClass, statusText, hoursText, nextChangeText) {
        // Remove all status classes
        this.statusElement.className = '';
        this.statusElement.classList.add(`status-${statusClass}`);
        this.statusElement.textContent = statusText;
        this.hoursElement.textContent = hoursText;
        this.nextChangeElement.textContent = nextChangeText;
        
        // Switch icons based on status
        if (statusClass === 'closing-soon') {
            this.bellIcon.style.display = 'block';
            this.clockIcon.style.display = 'none';
        } else {
            this.bellIcon.style.display = 'none';
            this.clockIcon.style.display = 'block';
        }
    }

    updateTodayHours(todayHours) {
        if (todayHours.isOpen) {
            const openTime = this.minutesToTimeString(this.timeStringToMinutes(todayHours.openTime));
            const closeTime = this.minutesToTimeString(this.timeStringToMinutes(todayHours.closeTime));
            // Additional info is handled in setStatus
        }
    }

    getNextOpenTime() {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const currentDayIndex = new Date().getDay();
        
        for (let i = 1; i <= 7; i++) {
            const nextDayIndex = (currentDayIndex + i) % 7;
            const nextDay = days[nextDayIndex];
            const nextDayHours = this.storeData.hours[nextDay];
            
            if (nextDayHours.isOpen) {
                const dayName = nextDay.charAt(0).toUpperCase() + nextDay.slice(1);
                const openTime = this.minutesToTimeString(this.timeStringToMinutes(nextDayHours.openTime));
                if (i === 1) {
                    return `Opens tomorrow at ${openTime}`;
                } else {
                    return `Opens ${dayName} at ${openTime}`;
                }
            }
        }
        return 'Check back for updates';
    }

    updateCountdown() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        // Calculate time until 7:15 PM (19:15)
        const closeTime = new Date();
        closeTime.setHours(19, 15, 0, 0);
        
        // If it's past closing time, set for next day
        if (now > closeTime) {
            closeTime.setDate(closeTime.getDate() + 1);
        }
        
        const timeDiff = closeTime - now;
        const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        // Update timer display
        const timerHours = document.getElementById('timer-hours');
        const timerMinutes = document.getElementById('timer-minutes');
        const timerSeconds = document.getElementById('timer-seconds');
        
        if (timerHours) timerHours.textContent = hoursLeft.toString().padStart(2, '0');
        if (timerMinutes) timerMinutes.textContent = minutesLeft.toString().padStart(2, '0');
        if (timerSeconds) timerSeconds.textContent = secondsLeft.toString().padStart(2, '0');
    }

    showError() {
        this.setStatus('closed', 'Unable to load hours', 'Please call for current hours', '');
        this.countdownElement.style.display = 'none';
    }
}

// Initialize store hours manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const manager = new StoreHoursManager();
    
    // Start the countdown timer immediately
    setInterval(() => {
        manager.updateCountdown();
    }, 1000);
    
    // Initial call
    manager.updateCountdown();
});

// Add mobile-first touch events for all buttons and interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .submit-button');
    ctaButtons.forEach(button => {
        // Touch events
        button.addEventListener('touchstart', (e) => {
            button.style.transform = 'translateY(-5px) scale(1.02)';
            button.style.boxShadow = '0 20px 50px rgba(255, 105, 180, 0.6)';
        });
        
        button.addEventListener('touchend', () => {
            setTimeout(() => {
                button.style.transform = '';
                button.style.boxShadow = '';
            }, 300);
        });
    });
    
    // Navigation links
    const navLinksAll = document.querySelectorAll('.nav-link');
    navLinksAll.forEach(link => {
        link.addEventListener('touchstart', () => {
            link.style.color = '#ff69b4';
            link.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('touchend', () => {
            setTimeout(() => {
                link.style.color = '';
                link.style.transform = '';
            }, 300);
        });
    });
    
    // Social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('touchstart', () => {
            link.style.background = 'rgba(255, 105, 180, 0.3)';
            link.style.transform = 'translateY(-2px)';
            link.style.color = '#ffb6c1';
        });
        
        link.addEventListener('touchend', () => {
            setTimeout(() => {
                link.style.background = '';
                link.style.transform = '';
                link.style.color = '';
            }, 300);
        });
    });
    
    // Info items in contact section
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('touchstart', () => {
            item.style.background = 'rgba(255, 105, 180, 0.1)';
            item.style.borderColor = 'rgba(255, 105, 180, 0.4)';
            item.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('touchend', () => {
            setTimeout(() => {
                item.style.background = '';
                item.style.borderColor = '';
                item.style.transform = '';
            }, 300);
        });
    });
});
