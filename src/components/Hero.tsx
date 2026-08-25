// src/components/Hero.tsx

import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section style={{
      padding: '160px 24px 80px',
      textAlign: 'center',
      maxWidth: 900,
      margin: '0 auto',
    }}>
      <div style={{
        display: 'inline-block',
        background: '#1e293b',
        border: '1px solid #334155',
        borderRadius: 20,
        padding: '6px 16px',
        fontSize: 13,
        color: '#94a3b8',
        marginBottom: 24,
      }}>
        ⚡ Open Source · Source-Agnostic · Multi-Target
      </div>

      <h1 style={{
        fontSize: 56,
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: '-2px',
        marginBottom: 24,
      }}>
        One Design System.
        <br />
        <span style={{
          background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Every Framework.
        </span>
      </h1>

      <p style={{
        fontSize: 20,
        color: '#94a3b8',
        maxWidth: 600,
        margin: '0 auto 32px',
        lineHeight: 1.7,
      }}>
        DSaaS compiles, versions, publishes, and distributes design systems.
        Submit tokens once. Get Tailwind, Bootstrap, MUI, SCSS, and CSS output automatically.
      </p>

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/playground" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 28px' }}>
          Try the Playground →
        </Link>
        <a href="#how-it-works" className="btn btn-secondary" style={{ fontSize: 16, padding: '14px 28px' }}>
          See How It Works
        </a>
      </div>

      {/* Terminal Demo */}
      <div style={{
        marginTop: 64,
        background: '#020617',
        border: '1px solid #334155',
        borderRadius: 16,
        padding: 32,
        textAlign: 'left',
        fontFamily: 'monospace',
        fontSize: 13,
        lineHeight: 2,
        color: '#e2e8f0',
      }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
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