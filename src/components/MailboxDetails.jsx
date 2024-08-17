import { useParams } from 'react-router-dom';


const MailboxDetails = (props) => {

    const { mailboxesId } = useParams()
    const thisMail = props.mailboxes.find((mail) => mail._id === Number(mailboxesId));

    return (  
        <>
           <h1>Mailbox {thisMail._id}</h1>

           <h3>Details</h3>
           <p>Box Holder: {thisMail.boxholder}</p>
           <p>Box Size: {thisMail.boxSize}</p>
        
        </>
    );
}
 
export default MailboxDetails;