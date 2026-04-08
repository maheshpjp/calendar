import DayBox from './DayBox'
import './CalendarGrid.css'

function CalendarGrid({ 
  daysInMonth, 
  firstDay,
  startDate,
  endDate,
  selectedDates,
  onDateClick,
  todayDate,
  currentMonth,
  currentYear,
  isDateInRange
}) {
  // Day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // Create array of days to display (including empty cells for alignment)
  const days = []
  
  // Add empty cells for days before the month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  
  // Add all days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  // Check if a day is selected
  const isSelected = (day) => {
    if (!day || !selectedDates) return false
    return selectedDates.some(d => d.day === day && d.month === currentMonth && d.year === currentYear)
  }

  // Check if a day is start
  const isStart = (day) => {
    if (!day || !startDate) return false
    return day === startDate.day && startDate.month === currentMonth && startDate.year === currentYear
  }

  // Check if a day is end
  const isEnd = (day) => {
    if (!day || !endDate) return false
    return day === endDate.day && endDate.month === currentMonth && endDate.year === currentYear
  }

  // Check if day is in the middle of range
  const isInRange = (day) => {
    if (!day || !startDate || !endDate) return false
    const currentDateObj = { day, month: currentMonth, year: currentYear }
    return isDateInRange(currentDateObj, startDate, endDate) && !isStart(day) && !isEnd(day)
  }

  return (
    <div className="calendar-grid">
      {/* Day name headers */}
      <div className="day-names">
        {dayNames.map(name => (
          <div key={name} className="day-name">
            {name}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="days-grid">
        {days.map((day, index) => (
          <DayBox
            key={index}
            day={day}
            isToday={day === todayDate}
            isSelected={isSelected(day)}
            isStart={isStart(day)}
            isEnd={isEnd(day)}
            isInRange={isInRange(day)}
            onClick={() => day && onDateClick(day)}
          />
        ))}
      </div>
    </div>
  )
}

export default CalendarGrid
