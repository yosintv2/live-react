import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
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
        Privacy Policy
      </h1>
      <p>Last updated: June 2026</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>Information We Collect</h2>
      <p>YoNo TV does not collect any personal information from visitors. We may use third-party services (such as Google Analytics) that collect anonymized usage data for analytical purposes.</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>Cookies</h2>
      <p>We may use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings.</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>Third-Party Services</h2>
      <p>We use Google Analytics to understand how visitors interact with our website. Google Analytics may collect anonymized data such as your IP address, browser type, and pages visited. This data is used solely for improving our services.</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>External Links</h2>
      <p>Our website may contain links to external sites. We are not responsible for the privacy practices or content of these third-party sites.</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>Changes to This Policy</h2>
      <p>We reserve the right to update this privacy policy at any time. Changes will be posted on this page.</p>

      <h2 style={{ color: '#1e293b', marginTop: '24px' }}>Contact</h2>
      <p>If you have questions about this policy, contact us at: contact@yonotv.net</p>

      <p><Link to="/">Back to Home</Link></p>
    </div>
  )
}
