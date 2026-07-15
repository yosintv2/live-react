import { Link } from 'react-router-dom'

export default function Disclaimer() {
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
        Disclaimer
      </h1>
      <p>Last updated: June 2026</p>
      <p>YoNo TV provides sports news, match schedules, and related information for informational purposes only.</p>
      <p>We do not host, store, or broadcast any media content (video, audio, or streams) on our servers. Any media content accessible through our website is hosted by third-party services. We are not responsible for the accuracy, legality, or availability of third-party content.</p>
      <p>All trademarks, logos, and brand names are the property of their respective owners. Use of these does not imply endorsement or affiliation.</p>
      <p>Information on this website may contain errors or inaccuracies. We make no warranties regarding the completeness, reliability, or accuracy of the information provided.</p>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  )
}
