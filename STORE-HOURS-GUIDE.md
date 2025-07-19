# 💕 Store Hours Management Guide 💕
*Complete guide for managing your salon's store hours*

## 🌟 What This Does For You

Your website automatically shows customers:
- ✅ **"We're Open!"** when your salon is open
- 🔴 **"We're Closed"** when you're closed  
- ⚠️ **"Closing Soon"** with a countdown timer before closing
- 🕐 **Exact hours** for today and when you'll be open next

All of this updates automatically from data built into your website - no external files needed!

---

## 📋 Quick Start Instructions

### 🚨 IMPORTANT: Time Format Rules
**You MUST use 24-hour time format (no AM/PM)**

| What You Want | What To Type |
|---------------|--------------|
| 9:00 AM | "09:00" |
| 12:00 PM (noon) | "12:00" |
| 1:00 PM | "13:00" |
| 5:00 PM | "17:00" |
| 7:30 PM | "19:30" |

### 🔧 How to Change Your Hours

1. **Find the file:** Look for `js/script.js` in your website files
2. **Make a backup:** Copy the file before making changes (just in case!)
3. **Find the data:** Look for `this.storeData = {` around line 755
4. **Edit carefully:** Change times using the format above
5. **Save the file:** The website updates automatically
6. **Check it works:** Visit your website to see the changes

### 📅 Setting Up Each Day

**For days you're OPEN:**
```javascript
"tuesday": {
  "isOpen": true,
  "openTime": "09:00",
  "closeTime": "18:30"
}
```

**For days you're CLOSED:**
```javascript
"monday": {
  "isOpen": false,
  "openTime": null,
  "closeTime": null
}
```

---

## 🎄 Holiday & Vacation Setup

### Adding Holidays
To close for Christmas, New Year, etc:
```javascript
"holidays": [
  {
    "date": "2025-12-25",
    "name": "Christmas Day",
    "isOpen": false
  }
]
```

**Date format:** YYYY-MM-DD (Year-Month-Day with dashes)

### Setting Vacation Time
For week-long vacations:
```javascript
"vacation": [
  {
    "startDate": "2025-08-15",
    "endDate": "2025-08-22",
    "reason": "Summer Vacation"
  }
]
```

---

## ⚙️ Complete Technical Configuration

### Full Structure Location
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

### Configuration Options Explained

**Daily Hours Properties:**
- `isOpen`: Boolean - `true` if open, `false` if closed
- `openTime`: String - Opening time in 24-hour format (HH:MM)
- `closeTime`: String - Closing time in 24-hour format (HH:MM)

**Countdown Timer (`closingSoonWarning`):**
- `30` = Shows 30 minutes before closing
- `60` = Shows 1 hour before closing *(recommended)*
- `120` = Shows 2 hours before closing

---

## 🎨 What Your Customers See

- 💚 **"We're Open!"** with sparkly animations when you're open
- 🔴 **"We're Closed"** when you're closed for the day
- 🔔 **"Closing Soon"** with a shaking bell and countdown timer
- 🌅 **"Opening Soon"** when you open within 12 hours
- 🎄 **"Closed for Holiday"** on special days

---

## 🆘 Troubleshooting

### "The countdown timer doesn't show up"
- Check your computer's time zone is correct
- Make sure `closingSoonWarning` is set to 60 or higher
- Verify your closing time is in 24-hour format (19:00, not 7:00 PM)
- **Opening Soon countdown only shows if opening within 12 hours** (prevents confusing 57+ hour countdowns)

### "Wrong status is showing"
- Double-check today's hours are set correctly
- Make sure you used `true` and `false` (not `True` and `False`)
- Look for holidays that might override regular hours

### "Times look weird on the website"
- Remember: 13:00 = 1 PM, 18:00 = 6 PM, 20:00 = 8 PM
- Always use leading zeros: 09:00 (not 9:00)
- Never use AM/PM in the JavaScript file

---

## 🔧 Quick Examples

**Typical Hair Salon Hours:**
```javascript
"tuesday": { "isOpen": true, "openTime": "09:00", "closeTime": "18:30" }
"wednesday": { "isOpen": true, "openTime": "09:00", "closeTime": "19:00" }
"saturday": { "isOpen": true, "openTime": "08:00", "closeTime": "19:25" }
"monday": { "isOpen": false, "openTime": null, "closeTime": null }
```

**Adding Independence Day:**
```javascript
{
  "date": "2025-07-04",
  "name": "Independence Day",
  "isOpen": false
}
```

---

## 💖 Important Notes

- **Static Hosting Compatible**: All data is embedded in JavaScript, no external files needed
- **Works on**: GitHub Pages, Netlify, Vercel, and traditional web hosting
- **Always backup** your files before making changes
- **Test your website** after each change
- If something breaks, restore your backup file

*Your beautiful salon website will automatically update to show the correct status and countdown timer!*