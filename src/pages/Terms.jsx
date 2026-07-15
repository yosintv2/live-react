import { Link } from 'react-router-dom'

export default function Terms() {
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
        Terms of Service
      </h1>
      <p>Last updated: June 2026</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>Acceptance of Terms</h2>
      <p>By accessing and using YoNo TV, you agree to comply with these terms of service. If you do not agree, please do not use our website.</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>Use of Content</h2>
      <p>All content on this website is for informational purposes only. We do not host any media content on our servers. All linked streams and media are hosted by third-party providers.</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>Intellectual Property</h2>
      <p>Unless otherwise stated, all content on YoNo TV is our property or used with permission. You may not reproduce, distribute, or modify our content without prior written consent.</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>Third-Party Links</h2>
      <p>Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these sites.</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>Limitation of Liability</h2>
      <p>YoNo TV shall not be liable for any damages arising from the use or inability to use our website or the content provided.</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>Changes</h2>
      <p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>

      <p><Link to="/">Back to Home</Link></p>
    </div>
  )
}
