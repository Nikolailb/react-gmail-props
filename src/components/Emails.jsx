import Email from './Email'

function Emails({ emails, toggleRead, toggleStar, setSelectedEmail }) {
  return (
    <>
      <ul>
        {emails.map((email, index) => (
          <Email key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} setSelectedEmail={setSelectedEmail} />
        ))}
      </ul>
    </>
  );
}

export default Emails;
