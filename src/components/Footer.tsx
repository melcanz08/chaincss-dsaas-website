// src/components/Footer.tsx

export function Footer() {
  return (
    <footer style={{
      padding: '48px 24px',
      borderTop: '1px solid #334155',
      textAlign: 'center',
      color: '#64748b',
      fontSize: 13,
    }}>
      <p style={{ marginBottom: 8 }}>
        🎨 DSaaS — Design System as a Service
      </p>
      <p>
        Open Source · MIT License · Powered by the ChainCSS Compiler
      </p>
      <p style={{ marginTop: 16, fontSize: 12 }}>
        <a href="https://github.com/melcanz08/chaincss" target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1' }}>
          GitHub
        </a>
        {' · '}
        <a href="https://chaincss.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1' }}>
          ChainCSS
        </a>
      </p>
    </footer>
  );
}