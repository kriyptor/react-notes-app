import { useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import Modal from 'react-modal';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    const [modal, setmodal] = useState(false);

    const close = () => {
        setmodal(false);
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: '60%',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    return ( 
        <div className="notes-list">
            {notes.map((note) => (
            <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
            ))}
            <Modal isOpen={modal} onRequestClose={() => setmodal(false)} style={customStyles}>
            <AddNote 
            handleAddNote={handleAddNote}
            handleClose={close}
            />
            </Modal>
        <button className='plus'onClick={()=> setmodal(true)}>+</button>
        </div>
     );
}
 
export default NotesList;