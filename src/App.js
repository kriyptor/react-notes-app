 import { useState, useEffect } from "react";
 import { nanoid } from 'nanoid';
 import NotesList from "./components/NotesList";
 import Search from "./components/Search";
 import Header from "./components/Header";
 
 const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is a demo note',
      date: '15/04/2021'
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    console.log(notes)
  }

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const [searchText, setSearchText] = useState('');
  const [darkmode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(fetchNotes){
      setNotes(fetchNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes))
  }, [notes])


   return ( 
    <div className={`${darkmode && 'dark-mode'}`}>
       <div className="container">
       <Header handleToogleDarkMode={setDarkMode}/>
       <Search handleSearchNote={setSearchText}/>
       <NotesList 
       notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))} 
       handleAddNote={addNote}
       handleDeleteNote={deleteNote}/>
     </div>
    </div>
    );
 }
  
 export default App;
