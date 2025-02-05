import "../styles/Email.css";

function EmailDetails({ email, onBack }) {
  return (
    <div className="email-details">
      <button onClick={onBack}>Back</button>
      <h2>{email.title}</h2>
      <p><strong>From:</strong> {email.sender}</p>
      <p>{email.body}</p>
    </div>
  );
}

export default EmailDetails;