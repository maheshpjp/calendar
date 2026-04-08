import { ChevronLeft, ChevronRight } from 'lucide-react'
import CalendarGrid from './CalendarGrid'
import './Calendar.css'

function Calendar({ 
  startDate, 
  endDate, 
  selectedDates,
  onDateClick,
  currentDate,
  isDateInRange,
  onPrevMonth,
  onNextMonth,
  calendarImage
}) {
  // Get month and year
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  // Get all days in the month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Get first day of the month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay()
  }

  // Get today's date
  const today = new Date()
  const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year
  const todayDate = today.getDate()

  const daysInMonth = getDaysInMonth(month, year)
  const firstDay = getFirstDayOfMonth(month, year)

  return (
    <div className="calendar">
      {/* Image Section */}
      <div className="calendar-image-section">
        <img src={calendarImage} alt="Calendar" className="calendar-image" />
      </div>

      {/* Calendar Header with Month Navigation */}
      <div className="calendar-header">
        <button className="nav-btn" onClick={onPrevMonth}>
          <ChevronLeft size={20} style={{display: 'inline-block', marginRight: '4px'}} /> Prev
        </button>
        
        <h2 className="month-year">
          {monthNames[month]} {year}
        </h2>
        
        <button className="nav-btn" onClick={onNextMonth}>
          Next <ChevronRight size={20} style={{display: 'inline-block', marginLeft: '4px'}} />
        </button>
      </div>

      {/* Calendar Grid */}
      <CalendarGrid
        daysInMonth={daysInMonth}
        firstDay={firstDay}
        startDate={startDate}
        endDate={endDate}
        selectedDates={selectedDates}
        onDateClick={onDateClick}
        todayDate={isCurrentMonth ? todayDate : null}
        currentMonth={month}
        currentYear={year}
        isDateInRange={isDateInRange}
      />
    </div>
  )
}

export default Calendar
