import { BookOpen, Calendar, Minus } from 'lucide-react'
import './SavedNotesDisplay.css'

function SavedNotesDisplay({ allNotes, onDeleteNote }) {
  const hasNotes = allNotes && Object.keys(allNotes).length > 0

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
  
  const formatDate = (dateObj) => {
    if (!dateObj) return ''
    return `${monthNames[dateObj.month]} ${dateObj.day}, ${dateObj.year}`
  }

  return (
    <div className="saved-notes-display">
      <h3 className="saved-notes-title"><BookOpen size={24} style={{display: 'inline-block', marginRight: '8px'}} /> My Saved Notes</h3>
      {hasNotes ? (
        <div className="notes-cards-container">
          {Object.entries(allNotes).map(([key, noteData]) => (
            <div key={key} className="note-card">
              <div className="note-card-content">
                <div className="note-date-header">
                  <Calendar size={16} style={{display: 'inline-block', marginRight: '6px'}} /> {formatDate(noteData.startDate)}{noteData.endDate && (noteData.endDate.day !== noteData.startDate.day || noteData.endDate.month !== noteData.startDate.month || noteData.endDate.year !== noteData.startDate.year) ? ` → ${formatDate(noteData.endDate)}` : ''}
                </div>
                <div className="note-text">{noteData.text}</div>
              </div>
              <button 
                className="delete-btn"
                onClick={() => onDeleteNote(key)}
                title="Delete this note"
              >
                <Minus size={18} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-notes-message">
          <p>No saved notes yet. Add a note to get started!</p>
        </div>
      )}
    </div>
  )
}

export default SavedNotesDisplay
