# Store Hours System - Technical Documentation

This document provides detailed technical information about the store hours configuration system for salon owners and developers.

## Overview

The store hours system automatically displays your current business status (Open/Closed), today's hours, countdown timer when closing soon, and handles holidays and vacation periods. All data is embedded directly in the JavaScript file (`js/script.js`) for static hosting compatibility and updates in real-time.

## Configuration Data: Embedded in js/script.js

### Complete Structure

Located in `js/script.js` around line 755 in the `StoreHoursManager` constructor:

```javascript
this.storeData = {
  "businessName": "Luxe Hair Studio",
  "timezone": "America/New_York",
  "hours": {
    "monday": { "isOpen": false, "openTime": null, "closeTime": null },
    "tuesday": { "isOpen": true, "openTime": "09:00", "closeTime": "18:30" },
    "wednesday": { "isOpen": true, "openTime": "09:00", "closeTime": "19:00" },
    "thursday": { "isOpen": true, "openTime": "09:00", "closeTime": "19:00" },
    "friday": { "isOpen": true, "openTime": "09:00", "closeTime": "19:00" },
    "saturday": { "isOpen": true, "openTime": "08:00", "closeTime": "19:25" },
    "sunday": { "isOpen": false, "openTime": null, "closeTime": null }
  },
  "specialHours": {
    "holidays": [
      { "date": "2025-12-25", "name": "Christmas Day", "isOpen": false },
      { "date": "2025-01-01", "name": "New Year's Day", "isOpen": false }
    ],
    "vacation": [
      { "startDate": "2025-08-15", "endDate": "2025-08-22", "reason": "Summer Vacation" }
    ]
  },
  "closingSoonWarning": 60,
  "messages": {
    "open": "We're Open!",
    "closed": "We're Closed",
    "closingSoon": "Closing Soon",
    "openingSoon": "Opening Soon",
    "holiday": "Closed for Holiday",
    "vacation": "Closed for Vacation"
  }
};
```

**Important:** This data is now embedded directly in the JavaScript file instead of a separate JSON file. This ensures compatibility with static hosting platforms like GitHub Pages, Netlify, and Vercel.

## Configuration Options Explained

### 1. Daily Hours (`hours` object)

Each day of the week has these properties:

**For Open Days:**
```json
"tuesday": {
  "isOpen": true,
  "openTime": "09:00",
  "closeTime": "18:30"
}
```

**For Closed Days:**
```json
"monday": {
  "isOpen": false,
  "openTime": null,
  "closeTime": null
}
```

- `isOpen`: Boolean - `true` if open, `false` if closed
- `openTime`: String - Opening time in 24-hour format (HH:MM)
- `closeTime`: String - Closing time in 24-hour format (HH:MM)

### 2. Countdown Timer (`closingSoonWarning`)

```json
"closingSoonWarning": 60
```

**What this controls:** The countdown timer appears when you're closing within this many minutes.

**Common values:**
- `30` = Timer shows 30 minutes before closing
- `60` = Timer shows 1 hour before closing (recommended)
- `120` = Timer shows 2 hours before closing

**Example:** If you close at 7:00 PM and set this to 60:
- At 6:00 PM: Countdown timer appears showing "1:00:00"
- At 6:30 PM: Timer shows "0:30:00"
- At 6:59 PM: Timer shows "0:01:00"

### 3. Status Messages (`messages` object)

Customize the text displayed for each status:

```json
"messages": {
  "open": "We're Open!",           // When currently open
  "closed": "We're Closed",        // When currently closed
  "closingSoon": "Closing Soon",   // When countdown timer is active
  "openingSoon": "Opening Soon"    // When opening within an hour
}
```

### 4. Special Dates (`specialDates` object)

#### Holidays
Single-day closures:
```json
"holidays": [
  {
    "date": "2025-12-25",
    "reason": "Christmas Day"
  },
  {
    "date": "2025-01-01",
    "reason": "New Year's Day"
  }
]
```

#### Vacation Periods
Multi-day closures:
```json
"vacationPeriods": [
  {
    "startDate": "2025-07-15",
    "endDate": "2025-07-29",
    "reason": "Summer Vacation"
  }
]
```

**Date Format:** Always use YYYY-MM-DD format (ISO 8601)

## Time Format Requirements

**Always use 24-hour format (HH:MM):**

| 12-Hour Format | 24-Hour Format |
|----------------|----------------|
| 9:00 AM        | "09:00"        |
| 12:00 PM       | "12:00"        |
| 1:00 PM        | "13:00"        |
| 6:00 PM        | "18:00"        |
| 9:00 PM        | "21:00"        |

## Status Logic

The system determines your current status using this priority order:

1. **Holidays** - Overrides everything else
2. **Vacation Periods** - Overrides regular hours
3. **Regular Hours** - Your normal daily schedule

### Status Types

1. **Open** - Currently open during regular hours
2. **Closed** - Currently closed (after hours, day off, etc.)
3. **Closing Soon** - Open but within the warning period
4. **Opening Soon** - Closed but opening within 60 minutes
5. **Holiday** - Closed due to holiday
6. **Vacation** - Closed due to vacation period

## Visual Display

### Status Colors
- **Green**: Open
- **Red**: Closed
- **Orange**: Closing Soon
- **Blue**: Opening Soon
- **Purple**: Holiday/Vacation

### Countdown Timer
- Appears only when status is "Closing Soon"
- Shows hours:minutes:seconds format (e.g., "2:15:30")
- Updates every second
- Includes shaking bell icon animation

## Technical Implementation

### Automatic Updates
- Status checks every second
- No page refresh required
- Real-time countdown updates

### Cache Prevention
- JSON file loads with cache-busting timestamp
- Immediate updates when configuration changes

### Mobile Responsive
- Compact design for mobile devices
- Touch-friendly interface

## Testing Your Configuration

### 1. Verify Time Format
All times must be in 24-hour format with leading zeros:
- ✅ "09:00" (correct)
- ❌ "9:00" (incorrect)
- ❌ "9 AM" (incorrect)

### 2. Test Special Dates
- Holidays must be future dates to be active
- Vacation periods include both start and end dates
- Date format must be YYYY-MM-DD

### 3. Verify Status Display
1. Save your changes to `store-hours.json`
2. Refresh your website
3. Check current status matches expectations
4. If within countdown period, verify timer appears

## Common Issues & Solutions

### Countdown Timer Not Showing
**Problem:** Timer doesn't appear when it should
**Solutions:**
- Check `closingSoonWarning` value (must be >= current minutes until close)
- Verify `closeTime` is in correct 24-hour format
- Ensure current day has `isOpen: true`

### Wrong Status Displaying
**Problem:** Shows open when should be closed (or vice versa)
**Solutions:**
- Check today's `isOpen` setting
- Verify `openTime` and `closeTime` are correct
- Look for active holidays or vacation periods
- Confirm computer/server time zone is correct

### Special Dates Not Working
**Problem:** Holidays/vacations not overriding regular hours
**Solutions:**
- Check date format is YYYY-MM-DD
- Ensure dates are current or future dates
- Verify JSON syntax is valid

### Format Errors
**Problem:** Website shows error or doesn't load
**Solutions:**
- Validate JSON syntax (use online JSON validator)
- Check all quotes are properly closed
- Ensure no trailing commas
- Verify all brackets and braces match

## Advanced Configuration

### Custom Messages
You can customize all status messages to match your brand:

```json
"messages": {
  "open": "We're Styling!",
  "closed": "Gone for the Day",
  "closingSoon": "Last Call for Beauty!",
  "openingSoon": "Almost Ready for You!"
}
```

### Multiple Warning Periods
While the system supports one `closingSoonWarning` period, you can adjust it seasonally:
- Busy seasons: 120 minutes (2 hours)
- Normal periods: 60 minutes (1 hour)
- Quick services: 30 minutes

## Security & Performance

### File Security
- `store-hours.json` should be readable by web server
- No sensitive information stored in configuration
- Regular backups recommended

### Performance
- Lightweight JSON parsing
- Minimal network requests
- Efficient DOM updates

## Integration with Booking Systems

The store hours system is designed to work alongside booking systems:
- Shows availability status
- Encourages bookings with countdown timer
- Displays next available appointment time

## Maintenance

### Regular Updates
- Review and update holiday dates annually
- Adjust seasonal hours as needed
- Update vacation periods in advance

### Backup Strategy
- Keep backup of working `store-hours.json`
- Test changes on staging site first
- Document any custom modifications

## Support

For technical issues:
1. Check this documentation first
2. Validate JSON syntax
3. Review browser console for errors
4. Contact your web developer with specific error messages

---

*This system automatically manages your salon's online presence, ensuring customers always see accurate availability information.*