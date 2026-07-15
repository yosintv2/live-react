import { Link } from 'react-router-dom'

export default function Contact() {
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
        Contact Us
      </h1>
      <p>Have questions, feedback, or want to get in touch? Reach out to us:</p>
      <p><strong>Email:</strong> contact@yonotv.net</p>
      <p><strong>Telegram:</strong> <a href="https://t.me/yosintvlive" target="_blank" rel="noopener">@YoSinTvLive</a></p>
      <p>We aim to respond to all inquiries within 24-48 hours.</p>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  )
}
