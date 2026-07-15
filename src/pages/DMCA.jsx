import { Link } from 'react-router-dom'

export default function DMCA() {
  return (
    <div style={{
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
      padding: '20px',
      background: '#f8fafc',
      color: '#222',
      lineHeight: 1.7,
      maxWidth: '800px',
      margin: '40px auto',
    }}>
      <h1 style={{ color: '#165dff', borderBottom: '2px solid #d6e1f5', paddingBottom: '10px' }}>
        DMCA Notice
      </h1>
      <p>YoNo TV respects the intellectual property rights of others. We do not host any media content on our own servers. Our site visitors may use external or third-party services to show content (embedding media from sites like Bet365, Dailymotion, Streamable, etc.)</p>
      <p>If you believe that any content on our website infringes upon your copyright, please contact us with the following information:</p>
      <ul>
        <li>A description of the copyrighted work you claim has been infringed</li>
        <li>The URL of the allegedly infringing content on our website</li>
        <li>Your contact information (name, address, email, phone number)</li>
        <li>A statement that you have a good faith belief that the use is not authorized</li>
        <li>A statement, made under penalty of perjury, that the information provided is accurate</li>
      </ul>
      <p><strong>Email:</strong> contact@yonotv.net</p>
      <p>We will review and respond to all valid DMCA notices promptly.</p>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  )
}
