// src/components/Hero.tsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section style={{
      padding: '160px 24px 80px',
      textAlign: 'center',
      maxWidth: 900,
      margin: '0 auto',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease-out',
    }}>
      {/* Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(99, 102, 241, 0.1)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: 20,
        padding: '6px 16px',
        fontSize: 13,
        color: '#a78bfa',
        marginBottom: 24,
      }}>
        <span style={{ fontSize: 16 }}>⚡</span>
        Open Source · Source-Agnostic · Multi-Target
      </div>

      <h1 style={{
        fontSize: 64,
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: '-2px',
        marginBottom: 24,
      }}>
        One Design System.
        <br />
        <span style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Every Framework.
        </span>
      </h1>

      <p style={{
        fontSize: 20,
        color: '#94a3b8',
        maxWidth: 600,
        margin: '0 auto 40px',
        lineHeight: 1.7,
      }}>
        DSaaS compiles, versions, publishes, and distributes design systems.
        Submit tokens once. Get Tailwind, Bootstrap, MUI, SCSS, and CSS output automatically.
      </p>

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link 
          to="/playground" 
          style={{
            padding: '14px 28px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            borderRadius: 12,
            textDecoration: 'none',
            fontSize: 16,
            fontWeight: 600,
            transition: 'all 0.3s',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
          }}
        >
          Try the Playground →
        </Link>
        <a 
          href="#how-it-works" 
          style={{
            padding: '14px 28px',
            background: 'transparent',
            color: '#f1f5f9',
            border: '1px solid #334155',
            borderRadius: 12,
            textDecoration: 'none',
            fontSize: 16,
            fontWeight: 600,
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#6366f1';
            e.currentTarget.style.color = '#a78bfa';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#334155';
            e.currentTarget.style.color = '#f1f5f9';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          See How It Works
        </a>
      </div>

      {/* Stats Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 48,
        marginTop: 64,
        padding: '24px 0',
        borderTop: '1px solid #334155',
        borderBottom: '1px solid #334155',
      }}>
        <div>
          <div style={{ fontSize: 32, fontWeight: 800, color: '#a78bfa' }}>6+</div>
          <div style={{ fontSize: 13, color: '#64748b' }}>Targets</div>
        </div>
        <div>
          <div style={{ fontSize: 32, fontWeight: 800, color: '#a78bfa' }}>100%</div>
          <div style={{ fontSize: 13, color: '#64748b' }}>Open Source</div>
        </div>
        <div>
          <div style={{ fontSize: 32, fontWeight: 800, color: '#a78bfa' }}>WCAG</div>
          <div style={{ fontSize: 13, color: '#64748b' }}>Compliant</div>
        </div>
      </div>

      {/* Terminal Demo */}
      <div style={{
        marginTop: 48,
        background: '#020617',
        border: '1px solid #334155',
        borderRadius: 16,
        padding: 32,
        textAlign: 'left',
        fontFamily: 'monospace',
        fontSize: 13,
        lineHeight: 2,
        color: '#e2e8f0',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
      }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }} />
          <span style={{ marginLeft: 12, color: '#64748b' }}>dsaas-cli</span>
        </div>
        <div style={{ color: '#10b981' }}>$ dsaas publish</div>
        <div style={{ color: '#94a3b8' }}>📦 Publishing design system...</div>
        <div style={{ color: '#94a3b8' }}>  ✅ my-design-system@1.0.0 published</div>
        <div style={{ color: '#94a3b8' }}>  ✅ Targets: css, scss, tailwind, bootstrap, mui</div>
        <div style={{ color: '#94a3b8' }}>  ✅ 16 tokens compiled</div>
        <div style={{ color: '#94a3b8' }}>  ✅ Accessibility: 3 checks passed</div>
        <div style={{ color: '#94a3b8' }}>  ✅ Graph: 17 nodes, 3 edges</div>
        <div style={{ color: '#10b981' }}>✨ Done!</div>
      </div>
    </section>
  );
}