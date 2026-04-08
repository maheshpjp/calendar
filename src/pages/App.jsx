import { useState, useEffect } from 'react'
import Calendar from '../components/Calendar'
import NotesBox from '../components/NotesBox'
import SavedNotesDisplay from '../components/SavedNotesDisplay'
import Header from '../components/Header'

// images
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import img9 from '../images/9.jpg'
import img10 from '../images/10.jpg'
import img11 from '../images/11.jpg'
import img12 from '../images/12.jpg'
import img13 from '../images/13.jpg'
import img14 from '../images/14.jpg'
import img15 from '../images/15.jpg'
import img16 from '../images/16.jpg'
import img17 from '../images/17.jpg'
import img18 from '../images/18.jpg'
import img19 from '../images/19.jpg'
import img20 from '../images/20.jpg'
import img21 from '../images/21.jpg'

// Array of all images
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21]

// Function to get a random image
const getRandomImage = () => {
  return images[Math.floor(Math.random() * images.length)]
}

function App() {
  // State for date selection
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [selectedDates, setSelectedDates] = useState([])
  
  // State for notes
  const [notes, setNotes] = useState({})
  
  // State for light/dark theme
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  // State for current month/year
  const [currentDate, setCurrentDate] = useState(new Date())

  // State for calendar image
  const [calendarImage, setCalendarImage] = useState(getRandomImage())

  // Load notes from localStorage when component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem('calendarNotes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  // Helper function to convert date object to comparable number (YYYYMMDD)
  const dateToNumber = (dateObj) => {
    if (!dateObj) return null
    return dateObj.year * 10000 + (dateObj.month + 1) * 100 + dateObj.day
  }

  // Helper function to get all dates between two dates
  const getDatesBetween = (start, end) => {
    if (!start || !end) return []
    
    const dates = []
    const startDate = new Date(start.year, start.month, start.day)
    const endDate = new Date(end.year, end.month, end.day)
    
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      dates.push({
        day: d.getDate(),
        month: d.getMonth(),
        year: d.getFullYear()
      })
    }
    return dates
  }

  // Helper function to check if date is in range
  const isDateInRange = (date, start, end) => {
    if (!date || !start || !end) return false
    const dateNum = dateToNumber(date)
    const startNum = dateToNumber(start)
    const endNum = dateToNumber(end)
    return dateNum >= startNum && dateNum <= endNum
  }

  // Handle date click
  const handleDateClick = (day) => {
    const clickedDate = { day, month: currentDate.getMonth(), year: currentDate.getFullYear() }
    
    // If both dates already selected, reset and start over
    if (startDate && endDate) {
      setStartDate(clickedDate)
      setEndDate(null)
      setSelectedDates([clickedDate])
      return
    }

    // If no start date yet, set it
    if (!startDate) {
      setStartDate(clickedDate)
      setSelectedDates([clickedDate])
      return
    }

    // If start date exists but no end date
    if (startDate && !endDate) {
      // If clicking the same date, toggle it off
      if (clickedDate.day === startDate.day && clickedDate.month === startDate.month && clickedDate.year === startDate.year) {
        setStartDate(null)
        setSelectedDates([])
        return
      }

      // Determine which is start and which is end
      const startNum = dateToNumber(startDate)
      const endNum = dateToNumber(clickedDate)
      
      let finalStart, finalEnd
      if (startNum <= endNum) {
        finalStart = startDate
        finalEnd = clickedDate
      } else {
        finalStart = clickedDate
        finalEnd = startDate
      }
      
      setStartDate(finalStart)
      setEndDate(finalEnd)
      
      // Get all dates in range
      const dateRange = getDatesBetween(finalStart, finalEnd)
      setSelectedDates(dateRange)
    }
  }

  // Reset selection
  const resetSelection = () => {
    setStartDate(null)
    setEndDate(null)
    setSelectedDates([])
  }

  // Format date for key
  const formatDateKey = (date) => {
    if (!date) return ''
    return `${date.year}-${String(date.month + 1).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
  }

  // Save notes for selected dates
  const saveNotes = (noteText) => {
    if (selectedDates.length === 0) {
      alert('Please select a date range first!')
      return
    }

    // Create a key for this date range
    const dateKey = `${formatDateKey(startDate)}_${formatDateKey(endDate || startDate)}`
    const updatedNotes = {
      ...notes,
      [dateKey]: {
        dateRange: selectedDates,
        text: noteText,
        startDate: startDate,
        endDate: endDate || startDate
      }
    }

    setNotes(updatedNotes)
    localStorage.setItem('calendarNotes', JSON.stringify(updatedNotes))
  }

  // Delete a note
  const deleteNote = (dateKey) => {
    const updatedNotes = { ...notes }
    delete updatedNotes[dateKey]
    setNotes(updatedNotes)
    localStorage.setItem('calendarNotes', JSON.stringify(updatedNotes))
  }

  // Get notes for selected range
  const getNotesForDateRange = () => {
    if (selectedDates.length === 0) return ''
    const dateKey = `${formatDateKey(startDate)}_${formatDateKey(endDate || startDate)}`
    return notes[dateKey]?.text || ''
  }

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Header 
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
      />
      
      <div className="container">
        <div className="main-content">
          {/* Calendar Section */}
          <div className="calendar-section">
            <Calendar
              startDate={startDate}
              endDate={endDate}
              selectedDates={selectedDates}
              onDateClick={handleDateClick}
              currentDate={currentDate}
              isDateInRange={isDateInRange}
              onPrevMonth={() => {
                setCalendarImage(getRandomImage())
                setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
              }}
              onNextMonth={() => {
                setCalendarImage(getRandomImage())
                setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
              }}
              calendarImage={calendarImage}
            />
            
          </div>

          {/* Notes Section */}
          <div className="notes-section">
            <NotesBox
              onSaveNotes={saveNotes}
              currentNotes={getNotesForDateRange()}
              startDate={startDate}
              endDate={endDate}
              onResetSelection={resetSelection}
            />
            {/* Saved Notes Display */}
            <SavedNotesDisplay allNotes={notes} onDeleteNote={deleteNote} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
