// src/components/Features.tsx

const features = [
  {
    icon: '🔄',
    title: 'Source-Agnostic',
    description: 'Submit JSON or ChainCSS tokens. DSaaS normalizes everything into a canonical representation.',
  },
  {
    icon: '🎯',
    title: 'Multi-Target Output',
    description: 'One source. Six outputs. CSS, SCSS, Tailwind, Bootstrap, MUI, and JSON generated automatically.',
  },
  {
    icon: '📦',
    title: 'Versioned Registry',
    description: 'Like npm for design systems. Publish, install, and manage versions of your tokens.',
  },
  {
    icon: '🔗',
    title: 'Token Relationships',
    description: 'Define derivations (lighten 20%), harmonies (complementary), and contrast requirements.',
  },
  {
    icon: '♿',
    title: 'Accessibility Built-In',
    description: 'WCAG contrast checks at compile time. Auto-fixes colors to meet AA standards.',
  },
  {
    icon: '📊',
    title: 'Live Dashboard',
    description: 'Visualize your token graph, edit tokens live, and see multi-target output in real time.',
  },
];

export function Features() {
  return (
    <section className="section" style={{ background: '#1e293b' }}>
      <div className="container">
        <h2 className="section-title">Everything You Need</h2>
        <p className="section-subtitle">
          DSaaS is a complete design system platform, not just a token compiler.
        </p>
        <div className="grid grid-3">
          {features.map((feature) => (
            <div key={feature.title} className="card">
              <div style={{ fontSize: 32, marginBottom: 12 }}>{feature.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{feature.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.7 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}