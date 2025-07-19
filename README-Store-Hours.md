# Store Hours Management

## Overview

The website automatically displays your current store status (Open, Closed, Closing Soon, etc.) by reading from the `store-hours.json` file. You can easily update your hours without touching any code!

## How to Update Store Hours

1. Open the `store-hours.json` file
2. Edit the times in 24-hour format (e.g., "09:00" for 9 AM, "19:00" for 7 PM)
3. Save the file
4. The website will automatically show the new hours

## JSON File Structure

### Regular Hours
```json
"tuesday": {
  "isOpen": true,
  "openTime": "09:00",
  "closeTime": "19:00"
}
```

- `isOpen`: Set to `false` if closed all day
- `openTime`: Opening time in 24-hour format
- `closeTime`: Closing time in 24-hour format

### Special Days

#### Holidays
```json
"holidays": [
  {
    "date": "2025-12-25",
    "name": "Christmas Day", 
    "isOpen": false
  }
]
```

#### Vacation
```json
"vacation": [
  {
    "startDate": "2025-08-15",
    "endDate": "2025-08-22",
    "reason": "Summer Vacation"
  }
]
```

### Settings

- `closingSoonWarning`: Minutes before closing to show "Closing Soon" (default: 60)
- `timezone`: Your business timezone (currently set to "America/New_York")

## Status Display

The website automatically shows:
- ✅ **Open** - Store is currently open
- 🔴 **Closed** - Store is currently closed
- ⚠️ **Closing Soon** - Store closes within the warning period
- 🔵 **Opening Soon** - Store opens within 1 hour
- 🟣 **Holiday/Vacation** - Special closure

## Tips

- Always use 24-hour format for times (00:00 to 23:59)
- Dates should be in YYYY-MM-DD format
- The system updates every minute automatically
- Make sure to test your changes by checking the website

## Example: Changing Tuesday Hours

To change Tuesday from 9 AM - 7 PM to 10 AM - 8 PM:

**Before:**
```json
"tuesday": {
  "isOpen": true,
  "openTime": "09:00", 
  "closeTime": "19:00"
}
```

**After:**
```json
"tuesday": {
  "isOpen": true,
  "openTime": "10:00",
  "closeTime": "20:00"
}
```

That's it! The website will automatically update.