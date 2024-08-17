
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    boxholder: '',
    boxSize: '',
  };
  

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
      };

    const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
    };

    return ( 
        <main>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>

            <label htmlFor="boxholder">Enter a Boxholder:</label>
            <input
             type="text" 
             name="boxholder" 
             id="boxholder"
             value={formData.boxholder}
             onChange={handleChange}/>

            <label htmlFor="boxSize">Select a Box Size: </label>
            <select name="boxSize" id="boxSize" onChange={handleChange}>
                <option value={formData.boxSize}>Small</option>
                <option value={formData.boxSize}>Medium</option>
                <option value={formData.boxSize}>Large</option>
            </select>

            <button type="submit">Submit</button>

            </form>
      
        </main>

     );
}
 
export default MailboxForm;