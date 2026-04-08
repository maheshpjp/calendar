# 🐺 Game of Thrones Interactive Calendar

A beautiful, clean, and interactive React calendar component inspired by **Game of Thrones** theme. Features date range selection, notes management, and responsive design with support for multiple house themes.

## ✨ Features

### 🎯 Core Calendar Features
- **Monthly Calendar View**: Displays current month with proper date alignment
- **Large Image Header**: Beautiful photo display at top (like wall calendars) with upload capability
- **Image Upload**: Click the camera icon to upload your own images - they're saved locally!
- **Date Range Selection**: Click two dates to select a range (start → end)
- **Visual Highlighting**: 
  - Today's date is highlighted with a gold border
  - Selected date range is color-coded
  - Middle dates in range show gradient highlighting
- **Month Navigation**: Navigate between months with Previous/Next buttons
- **Touch-Friendly UI**: Responsive design for mobile and desktop

### 📝 Notes System
- **Date-Based Notes**: Save notes for any selected date range
- **Local Storage**: Notes persist across browser sessions
- **Easy Management**: Simple textarea + save button interface

### 🏠 House Themes
Choose from three Game of Thrones house themes:
- **House Stark** 🐺 - Classic dark grey and gold (default)
- **House Lannister** 🦁 - Golden and red theme
- **House Targaryen** 🐉 - Ice blue and cyan theme

### 📱 Responsive Design
- **Desktop**: Side-by-side layout (calendar + notes)
- **Tablet**: Responsive grid layout
- **Mobile**: Stacked vertical layout with touch-optimized controls

### 🎨 Game of Thrones Design
- Dark theme with gold accents (#d4af37)
- Serif fonts (`Georgia`, `Cormorant Garamond`, `Crimson Text`) for royal look
- Smooth hover animations and transitions
- Premium shadow effects and gradients
- Ancient scroll-like appearance

## 📁 Project Structure

```
calander/
├── src/
│   ├── components/
│   │   ├── Calendar.jsx          # Main calendar component
│   │   ├── Calendar.css
│   │   ├── CalendarGrid.jsx       # Grid layout for dates
│   │   ├── CalendarGrid.css
│   │   ├── DayBox.jsx             # Individual day cell
│   │   ├── DayBox.css
│   │   ├── Header.jsx             # Header + house selector
│   │   ├── Header.css
│   │   ├── NotesBox.jsx           # Notes panel
│   │   └── NotesBox.css
│   ├── pages/
│   │   └── App.jsx                # Main app component & state
│   ├── styles/
│   │   └── styles.css             # Global styles + themes
│   └── main.jsx                   # React entry point
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies
└── README.md                      # This file
```

## 🚀 Getting Started

### Installation

1. **Navigate to project directory:**
   ```bash
   cd calander
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Vite will show you the local URL (typically `http://localhost:5173`)
   - Open that URL in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📖 How to Use

### 1. **Upload a Calendar Image**
   - Click the 📷 camera icon in the top-right corner of the calendar image
   - Select any image from your computer
   - The image is saved and will persist when you close the browser
   - Perfect for creating personalized wall calendar designs!

### 2. **Selecting a Date Range**
   - Click on any date to set the start date (highlighted in gold)
   - Click on another date to set the end date
   - All dates in between will be highlighted with a gradient
   - Click "Clear Selection" to reset

### 3. **Adding Notes**
   - Select a date range
   - Type your note in the textarea
   - Click "💾 Save Note" to save to local storage
   - Notes persist even after closing the browser

### 4. **Changing the Theme**
   - Click one of the house buttons at the top:
     - 🐺 House Stark (dark grey & gold)
     - 🦁 House Lannister (golden & red)
     - 🐉 House Targaryen (ice blue & cyan)
   - Theme changes apply instantly

### 5. **Navigating Months**
   - Use "← Prev" and "Next →" buttons to navigate
   - Calendar updates automatically

## 🎨 Customization

### Change House Colors
Edit `src/styles/styles.css` and modify the theme CSS variables:

```css
.app-stark {
  --primary-gold: #d4af37;
  --primary-dark: #1a1a1a;
}
```

### Change Fonts
Edit `src/styles/styles.css` - Google Fonts imports are at the top:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap');
```

### Adjust Responsive Breakpoints
Edit `src/styles/styles.css` - Media queries are at the bottom:

```css
@media (max-width: 768px) {
  /* Tablet styles */
}
```

## 🧠 Key Functions Explained

### `getDaysInMonth()`
Calculates total days in a given month.

### `getFirstDayOfMonth()`
Finds which day of week the 1st falls on (0=Sun, 6=Sat).

### `handleDateClick()`
Manages date selection logic:
- First click = start date
- Second click = end date (fills range)
- Third click = reset and start over

### `isInRange()`
Determines if a date falls within selected range.

### `saveNotes()` / `loadNotes()`
Uses browser localStorage to persist notes.

## 🔧 Technologies Used

- **React 18** - UI framework with hooks
- **Vite** - Fast development server & bundler
- **CSS3** - Grid layout, flexbox, gradients
- **localStorage** - Browser storage for notes
- **Google Fonts** - Serif fonts for royal look

## 📋 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✅ Features Implemented

- ✅ Large image header (wall calendar style)
- ✅ Image upload with localStorage persistence
- ✅ Dynamic monthly calendar
- ✅ Date range selection
- ✅ Today's date highlighting
- ✅ Notes system with localStorage
- ✅ Three house themes
- ✅ Month navigation
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Smooth animations
- ✅ Game of Thrones styling
- ✅ Touch-friendly UI

## 🎯 Code Quality

- **Simple variable names** - Easy to understand
- **Well-commented code** - Logic explained clearly
- **Modular components** - Each component has single responsibility
- **Clean CSS** - Organized with comments
- **No unnecessary dependencies** - Uses only React + Vite

## 🐛 Troubleshooting

### Calendar not showing?
- Make sure all CSS files are imported
- Check browser console for errors (F12)

### Notes not saving?
- Check that localStorage is enabled in your browser
- Clear browser cache and try again

### Styling looks off?
- Make sure you've installed all packages: `npm install`
- Try clearing browser cache (Ctrl+Shift+Delete)

## 📝 License

This project is free to use and modify!

## 🎬 Ready to Use!

The calendar is production-ready and can be:
- Embedded in other React apps
- Used as a starter template
- Customized with your own colors/themes
- Extended with additional features

Happy coding! 🎭

---

Made with ❤️ and a touch of Game of Thrones magic ⚔️
