import { useState } from "react";


const AddNote = ({ handleAddNote , handleClose }) => {
    const [noteText, setNoteText] = useState('');
    const charLimit = 200;

    const handleChange = (e) => {
        if(charLimit - e.target.value.length >=0 ){
            setNoteText(e.target.value);
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
            handleClose()
        }
        else{
            alert('kindly add some text!!!')
        }
    }

    return ( 
        <div className="note new">
            <textarea 
            cols="10" 
            rows="8"
            placeholder='Type to add a note...'
            value={noteText}
            onChange={handleChange}>     
            </textarea>
            <div className="note-footer">
                <small>{charLimit-noteText.length} remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
         </div>
     );
}
 
export default AddNote;