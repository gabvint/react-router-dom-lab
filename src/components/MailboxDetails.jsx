import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {

    const { mailboxesId } = useParams()
    const thisMail = props.mailboxes.find((mail) => mail._id === Number(mailboxesId));
    const recipientLetters = props.letters.filter((letter) => Number(letter.mailboxId) === Number(mailboxesId));
    

    return (  
        <>
           <h1>Mailbox {thisMail._id}</h1>

           <h3>Details</h3>
           <p>Box Holder: {thisMail.boxholder}</p>
           <p>Box Size: {thisMail.boxSize}</p>

           <h2>Letters</h2>

           {recipientLetters.map((letter, index) => (
                <div key={index}>
                    <p>Dear, {letter.recipient}</p>
                    <p>{letter.message}</p>
                </div>
           ))}

        </>
    );
}
 
export default MailboxDetails;