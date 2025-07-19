# 💕 Store Hours Management Guide 💕
*Easy setup for your beautiful salon website*

## 🌟 What This Does For You

Your website automatically shows customers:
- ✅ **"We're Open!"** when your salon is open
- 🔴 **"We're Closed"** when you're closed  
- ⚠️ **"Closing Soon"** with a countdown timer before closing
- 🕐 **Exact hours** for today and when you'll be open next

All of this updates automatically by reading your `store-hours.json` file - no programming needed!

## 📋 Step-by-Step Instructions

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

1. **Find the file:** Look for `store-hours.json` in your website files
2. **Make a backup:** Copy the file before making changes (just in case!)
3. **Edit carefully:** Change times using the format above
4. **Save the file:** The website updates automatically
5. **Check it works:** Visit your website to see the changes

### 📅 Setting Up Each Day

**For days you're OPEN:**
```json
"monday": {
  "isOpen": true,
  "openTime": "09:00",
  "closeTime": "18:00"
}
```

**For days you're CLOSED:**
```json
"sunday": {
  "isOpen": false,
  "openTime": null,
  "closeTime": null
}
```

### 🎄 Adding Holidays

To close for Christmas, New Year, etc:
```json
"holidays": [
  {
    "date": "2025-12-25",
    "name": "Christmas Day",
    "isOpen": false
  }
]
```

**Date format:** YYYY-MM-DD (Year-Month-Day with dashes)

### 🏖️ Setting Vacation Time

For week-long vacations:
```json
"vacation": [
  {
    "startDate": "2025-08-15",
    "endDate": "2025-08-22", 
    "reason": "Summer Vacation - We'll be back refreshed!"
  }
]
```

### ⏰ Countdown Timer Settings

`"closingSoonWarning": 60` means the countdown timer appears 60 minutes before closing.

**Popular options:**
- `30` = Shows 30 minutes before closing
- `60` = Shows 1 hour before closing *(recommended)*
- `120` = Shows 2 hours before closing

## 🎨 What Your Customers See

- 💚 **"We're Open!"** with sparkly animations when you're open
- 🔴 **"We're Closed"** when you're closed for the day
- 🔔 **"Closing Soon"** with a shaking bell and countdown timer
- 🌅 **"Opening Soon"** when you open within an hour
- 🎄 **"Closed for Holiday"** on special days

## 🆘 Troubleshooting

### "The countdown timer doesn't show up"
- Check your computer's time zone is correct
- Make sure `closingSoonWarning` is set to 60 or higher
- Verify your closing time is in 24-hour format (19:00, not 7:00 PM)

### "Wrong status is showing"
- Double-check today's hours are set correctly
- Make sure you used `true` and `false` (not `True` and `False`)
- Look for holidays that might override regular hours

### "Times look weird on the website"
- Remember: 13:00 = 1 PM, 18:00 = 6 PM, 20:00 = 8 PM
- Always use leading zeros: 09:00 (not 9:00)
- Never use AM/PM in the JSON file

## 🔧 Quick Examples

**Typical Hair Salon Hours:**
```json
"tuesday": { "isOpen": true, "openTime": "09:00", "closeTime": "18:00" }
"wednesday": { "isOpen": true, "openTime": "09:00", "closeTime": "19:00" }
"saturday": { "isOpen": true, "openTime": "08:00", "closeTime": "17:00" }
"sunday": { "isOpen": false, "openTime": null, "closeTime": null }
```

**Adding Independence Day:**
```json
{
  "date": "2025-07-04",
  "name": "Independence Day",
  "isOpen": false
}
```

## 💖 Need Help?

- Always save a backup before making changes
- Test your website after each change
- If something breaks, restore your backup file
- Keep this guide handy for reference

*Your beautiful salon website will automatically update to show the correct status and countdown timer!*