import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    return ( 
        <>
            <h1>Mailbox List</h1>

            <ul>
                {props.mailboxes.map((mail) => (
                    <li className="mail-box " key={mail._id}>
                        <Link to={`/mailboxes/${mail._id}`}> Mailbox {mail._id}</Link>   
                    </li>
                ))}
            </ul>

        </>
        
     );
}
 
export default MailboxList;