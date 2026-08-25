// src/components/Navbar.tsx

import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #334155',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Link to="/" style={{
        fontSize: 20,
        fontWeight: 800,
        color: '#f1f5f9',
        textDecoration: 'none',
        letterSpacing: '-0.5px',
      }}>
        🎨 DSaaS
      </Link>

      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <Link to="/docs" style={navLinkStyle}>Docs</Link>
        <Link to="/playground" style={navLinkStyle}>Playground</Link>
        <a
          href="https://github.com/melcanz08/chaincss"
          target="_blank"
          rel="noopener noreferrer"
          style={navLinkStyle}
        >
          GitHub
        </a>
        <Link to="/playground" style={{
          padding: '8px 16px',
          background: '#6366f1',
          color: 'white',
          borderRadius: 8,
          textDecoration: 'none',
          fontSize: 13,
          fontWeight: 600,
        }}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: '#94a3b8',
  textDecoration: 'none',
  fontSize: 14,
  fontWeight: 500,
  transition: 'color 0.2s',
};