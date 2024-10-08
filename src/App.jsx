// src/App.jsx
import Navbar from './components/NavBar.jsx'; 
import MailboxForm from './components/MailboxForm.jsx';
import MailboxList from './components/MailboxList.jsx';
import MailboxDetails from './components/MailboxDetails.jsx';
import LetterForm from './components/LetterForm.jsx';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';


const App = () => {

  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetter] = useState([]);

  const addBox = (newMail) => {
    newMail._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMail])
  }

  const addLetter = (newLetter) => {
    setLetter([...letters, newLetter])
  }

  console.log(mailboxes)
  console.log(letters)
  return(
      <>

        <Navbar />

        <Routes>
          <Route path='/' element={<main><h1>Post Office</h1></main>} />
          <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
          <Route path='/mailboxes/:mailboxesId' element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
          <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
          <Route path='/new-letter' element={<LetterForm addLetter={addLetter} mailboxes={mailboxes}/>} />
          <Route path='*' element={<h1>Mailbox Not Found!</h1>} />
        </Routes>


      </>

  );
};

export default App;

