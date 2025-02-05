import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Emails from './components/emails'
import EmailDetails from './components/EmailDetails'

const getUnreadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [selectedEmail, setSelectedEmail] = useState(null)
  const [search, setSearch] = useState("")

  
  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
        ? { ...email, starred: !email.starred }
        : email
      )
      setEmails(updatedEmails)
    }
    
    const toggleRead = targetEmail => {
      const updatedEmails = emails =>
        emails.map(email =>
          email.id === targetEmail.id ? { ...email, read: !email.read } : email
        )
        setEmails(updatedEmails)
      }

  let filteredEmails = emails
  if (hideRead) 
    filteredEmails = getUnreadEmails(filteredEmails)
  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)
  if (search) 
    filteredEmails = filteredEmails.filter(filteredEmails => filteredEmails.title.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div className="app">
      <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>

          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>

        <div className="search">
          <input className="search-bar" placeholder="Search mail" 
          onChange={(e) => setSearch(e.target.value)}/>
        </div>
      </header>
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{getUnreadEmails(emails).length}</span>
          </li>
          <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => setCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{getStarredEmails(emails).length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={e => setHideRead(e.target.checked)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {selectedEmail ? (
            <EmailDetails email={selectedEmail} onBack={() => setSelectedEmail(null)} />
          ) : (
            <Emails emails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} setSelectedEmail={setSelectedEmail} />
          )}      
      </main>
    </div>
  )
}

export default App
