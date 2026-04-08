import './DayBox.css'

function DayBox({ 
  day,
  isToday,
  isSelected,
  isStart,
  isEnd,
  isInRange,
  onClick
}) {
  // Determine CSS classes
  let classes = 'day-box'
  
  if (!day) {
    classes += ' empty'
  } else {
    if (isToday) classes += ' today'
    if (isSelected) classes += ' selected'
    if (isStart) classes += ' start'
    if (isEnd) classes += ' end'
    if (isInRange) classes += ' in-range'
  }

  return (
    <div 
      className={classes}
      onClick={onClick}
    >
      {day && <span className="day-text">{day}</span>}
      {isToday && <span className="today-indicator">•</span>}
    </div>
  )
}

export default DayBox
