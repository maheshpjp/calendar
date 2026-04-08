import { useState, useEffect } from 'react'
import { FileText, ArrowLeft, Plus, Trash2 } from 'lucide-react'
import './NotesBox.css'

function NotesBox({ onSaveNotes, currentNotes, startDate, endDate, onResetSelection }) {
  const [noteText, setNoteText] = useState('')

  useEffect(() => {
    setNoteText(currentNotes || '')
  }, [currentNotes])

  const handleSave = () => {
    if (!noteText.trim()) {
      alert('Please write a note before saving!')
      return
    }
    onSaveNotes(noteText)
    setNoteText('')
    onResetSelection()
    setTimeout(() => {
      console.log('Note saved successfully!')
    }, 100)
  }

  const handleClear = () => {
    setNoteText('')
    onResetSelection()
  }


  const getSelectionStatus = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December']
    
    const formatDate = (dateObj) => {
      if (!dateObj) return ''
      return `${monthNames[dateObj.month]} ${dateObj.day}, ${dateObj.year}`
    }

    if (!startDate && !endDate) {
      return 'Select a starting date'
    }
    if (startDate && !endDate) {
      return `Start date: ${formatDate(startDate)} — Choose end date`
    }
    if (startDate && endDate) {
      return `${formatDate(startDate)} to ${formatDate(endDate)}`
    }
  }

  return (
    <div className="notes-box">
      <div className="notes-header">
        <h3 className="notes-title"><FileText size={24} style={{display: 'inline-block', marginRight: '8px'}} /> Notes</h3>
      </div>

      {/* Date Selection  */}
      <div className="date-selection-status">
        <p className="status-text">{getSelectionStatus()}</p>
      </div>

      {!startDate ? (
        <div className="notes-placeholder">
          <p><ArrowLeft size={20} style={{display: 'inline-block', marginRight: '8px'}} /> Select a date to add notes</p>
        </div>
      ) : (
        <>
          <textarea
            className="notes-textarea"
            placeholder="Write your notes here..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
          
          <div className="notes-buttons">
            <button 
              className="save-btn"
              onClick={handleSave}
            >
              <Plus size={20} style={{display: 'inline-block', marginRight: '6px'}} /> Add Notes
            </button>
            <button 
              className="clear-btn"
              onClick={handleClear}
            >
              <Trash2 size={20} style={{display: 'inline-block', marginRight: '6px'}} /> Clear
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default NotesBox
