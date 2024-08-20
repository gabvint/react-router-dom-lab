import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    mailboxId: '',
    recipient: '',
    message: '',
};
  

const LetterForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addLetter(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    };

    const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
    };


    return ( 

        <main>
             <h1>New Letter</h1>

             <form onSubmit={handleSubmit}>

            <label htmlFor="mailboxId">Select a Mailbox:</label>
            <select name="mailboxId" id="mailboxId" value={formData.mailboxId} onChange={handleChange}>

            <option value="">-- Select a mailbox --</option> 
                {props.mailboxes.map((mail, index) => (
                    <option key={index} value={mail._id}>
                    {mail._id}
                  </option>
                ))}
            </select>



             <label htmlFor="recipient">Recipient:</label>
             <input
             type="text" 
             name="recipient" 
             id="recipient"
             value={formData.recipient}
             onChange={handleChange}/>


             <label htmlFor="message">Message:</label>
             <textarea
             name="message" 
             id="message"
             value={formData.message}
             onChange={handleChange}>
             </textarea>


             <button type="submit">Submit</button>
             </form>
        </main>



    )
}
 
export default LetterForm;