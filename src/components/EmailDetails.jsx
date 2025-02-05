import "../styles/EmailDetails.css";
import backArrow from "../assets/icons/back-arrow.png";
import returnArrow from "../assets/icons/return-arrow.png";
import rateStarButton from "../assets/icons/rate-star-button.png";
import rubbishButton from "../assets/icons/rubbish-bin-delete-button.png";
import { formatDate } from "../utils/misc";

function EmailDetails({ email, onBack }) {
  return (
    <article className="email-content">
      <div className="email-actions">
        <img className="icon" src={returnArrow} alt="reply button" onClick={onBack} width={32}/>
      </div>
      <div className="title">
        <h1>{email.title}</h1>
      </div>
      <header className="email-content--header">
        <div className="avatar"></div>
        <div className="email-info">
          <div className="sender-info">
            <h2>{email.sender}</h2>
            <em>&lt;{email.senderEmail}&gt;</em>
          </div>
          <div className="user-info">
            <p>
              to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
            </p>
          </div>
        </div>
        <div className="date-info">
          <p>{formatDate(email.recieved)}</p>
        </div>
        <div className="email-action-icons">
          <ul>
            <li>
              <img className="icon" src={backArrow} alt="reply button" onClick={onBack} />
            </li>
            <li>
              <img className="icon" src={rateStarButton} alt="star button" />
            </li>
            <li>
              <img className="icon" src={rubbishButton} alt="delete button" />
            </li>
          </ul>
        </div>
      </header>
      <hr className="seperator"/>
      <section className="email-body">
        <div className="content">
          <p>{email.body}</p>
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </article>
  );
}

export default EmailDetails;