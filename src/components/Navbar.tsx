// src/components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #334155',
      padding: '16px 24px',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
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
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <span style={{ fontSize: 24 }}>🎨</span>
          <span>DSaaS</span>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link 
            to="/docs" 
            style={{
              ...navLinkStyle,
              color: isActive('/docs') ? '#f1f5f9' : '#94a3b8',
              fontWeight: isActive('/docs') ? 600 : 500,
              position: 'relative',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#f1f5f9'}
            onMouseLeave={(e) => e.currentTarget.style.color = isActive('/docs') ? '#f1f5f9' : '#94a3b8'}
          >
            Docs
          </Link>
          
          <Link 
            to="/playground" 
            style={{
              ...navLinkStyle,
              color: isActive('/playground') ? '#f1f5f9' : '#94a3b8',
              fontWeight: isActive('/playground') ? 600 : 500,
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#f1f5f9'}
            onMouseLeave={(e) => e.currentTarget.style.color = isActive('/playground') ? '#f1f5f9' : '#94a3b8'}
          >
            Playground
          </Link>
          
          <a
            href="https://github.com/melcanz08/chaincss"
            target="_blank"
            rel="noopener noreferrer"
            style={navLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.color = '#f1f5f9'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
          >
            GitHub
          </a>
          
          <Link 
            to="/playground" 
            style={{
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              borderRadius: 8,
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 600,
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
            }}
          >
            Get Started →
          </Link>
        </div>
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
  cursor: 'pointer',
};