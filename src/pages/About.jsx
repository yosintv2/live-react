import { Link } from 'react-router-dom'

export default function About() {
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
        About YoNo TV
      </h1>
      <p>YoNo TV is a sports website dedicated to providing live cricket and football updates, match schedules, playing XI predictions, and comprehensive sports news coverage.</p>
      <p>We cover major tournaments including the T20 World Cup, ICC Cricket World Cup, IPL, Premier League, Champions League, La Liga, and more.</p>
      <p>Our mission is to keep sports fans informed with accurate and timely information about their favorite teams and matches.</p>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  )
}
