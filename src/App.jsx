// src/App.jsx
import Navbar from './components/NavBar.jsx'; 
import MailboxForm from './components/MailboxForm.jsx';
import MailboxList from './components/MailboxList.jsx';
import MailboxDetails from './components/MailboxDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const mailboxInitialState = [
    {_id: 1, boxholder: 'Gab', boxSize: 'Small'},
]

const App = () => {

  const [mailboxes, setMailboxes] = useState(mailboxInitialState);

  const addBox = (newMail) => {
    newMail._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMail])
  }

  return(
      <>

        <Navbar />


        <Routes>
          <Route path='/' element={<main><h1>Post Office</h1></main>} />
          <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
          <Route path='/mailboxes/:mailboxesId' element={<MailboxDetails mailboxes={mailboxes} />} />
          <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
          <Route path='*' element={<h1>Mailbox Not Found!</h1>} />
        </Routes>


      </>

  );
};

export default App;

