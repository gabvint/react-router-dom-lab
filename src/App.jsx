// src/App.jsx
import Navbar from './components/NavBar.jsx'; 
import MailboxForm from './components/MailboxForm.jsx';
import MailboxList from './components/MailboxList.jsx';
import MailboxDetails from './components/MailboxDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';



const App = () => {

  const [mailboxes, setMailboxes] = useState([])


  return(
      <>

        <Navbar />


        <Routes>
          <Route path='/' element={<main><h1>Post Office</h1></main>} />
          <Route path='/mailboxes' element={<MailboxList />} />
          <Route path='/new-mailbox' element={<MailboxForm />} />
          <Route path='/mailboxes/:mailboxesId' element={<MailboxDetails />} />
        </Routes>



      </>



  );
};

export default App;

