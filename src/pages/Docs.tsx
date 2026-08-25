// src/pages/Docs.tsx

import { useState } from 'react';

const docsSections = [
  { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
  { id: 'tokens', title: 'Design Tokens', icon: '🎨' },
  { id: 'relationships', title: 'Token Relationships', icon: '🔗' },
  { id: 'adapters', title: 'Source Adapters', icon: '🔌' },
  { id: 'emitters', title: 'Output Emitters', icon: '📤' },
  { id: 'cli', title: 'CLI Commands', icon: '💻' },
  { id: 'api', title: 'API Reference', icon: '🔧' },
  { id: 'accessibility', title: 'Accessibility', icon: '♿' },
];

export function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started');

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      paddingTop: 80,
    }}>
      {/* Sidebar */}
      <aside style={{
        width: 250,
        flexShrink: 0,
        borderRight: '1px solid #334155',
        padding: '24px 16px',
        position: 'sticky',
        top: 80,
        height: 'calc(100vh - 80px)',
        overflowY: 'auto',
        background: '#1e293b',
      }}>
        <h3 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, color: '#94a3b8', marginBottom: 16 }}>
          Documentation
        </h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {docsSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 12px',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: activeSection === section.id ? 600 : 400,
                background: activeSection === section.id ? '#6366f1' : 'transparent',
                color: activeSection === section.id ? 'white' : '#94a3b8',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
            >
              <span>{section.icon}</span>
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main style={{
        flex: 1,
        padding: '40px 48px',
        maxWidth: 800,
      }}>
        {activeSection === 'getting-started' && <GettingStarted />}
        {activeSection === 'tokens' && <TokensDoc />}
        {activeSection === 'relationships' && <RelationshipsDoc />}
        {activeSection === 'adapters' && <AdaptersDoc />}
        {activeSection === 'emitters' && <EmittersDoc />}
        {activeSection === 'cli' && <CliDoc />}
        {activeSection === 'api' && <ApiDoc />}
        {activeSection === 'accessibility' && <AccessibilityDoc />}
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>{title}</h2>
      {children}
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre style={{
      background: '#020617',
      border: '1px solid #334155',
      borderRadius: 8,
      padding: 16,
      fontSize: 13,
      fontFamily: 'monospace',
      overflowX: 'auto',
      color: '#e2e8f0',
      lineHeight: 1.6,
      marginBottom: 16,
    }}>
      {code}
    </pre>
  );
}

function GettingStarted() {
  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>Getting Started</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        DSaaS is a design system platform. It compiles, versions, publishes, and distributes
        design tokens to multiple frameworks.
      </p>

      <Section title="1. Initialize a Design System">
        <CodeBlock code={`$ dsaas init my-design-system`} />
      </Section>

      <Section title="2. Define Tokens">
        <CodeBlock code={`// tokens/colors.json
{
  "colors": {
    "primary": {
      "500": { "value": "#7c3aed" },
      "400": {
        "value": "#894eef",
        "derive": { "from": "colors.primary.500", "method": "lighten", "amount": 0.1 }
      }
    }
  }
}`} />
      </Section>

      <Section title="3. Publish">
        <CodeBlock code={`$ dsaas publish

📦 Publishing my-design-system...
✅ Version 1.0.0 published
✅ 16 tokens compiled
✅ 3 relationships resolved`} />
      </Section>

      <Section title="4. Install for Your Framework">
        <CodeBlock code={`# Tailwind
$ dsaas install my-design-system --target tailwind

# MUI
$ dsaas install my-design-system --target mui

# Bootstrap
$ dsaas install my-design-system --target bootstrap`} />
      </Section>
    </>
  );
}

function TokensDoc() {
  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>Design Tokens</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        Design tokens are the atomic building blocks of your design system.
      </p>

      <Section title="Token Categories">
        <CodeBlock code={`{
  "colors": { ... },      // Color palette
  "spacing": { ... },     // Spacing scale
  "typography": { ... },  // Font families, sizes, weights
  "radius": { ... },      // Border radius
  "shadows": { ... },     // Box shadows
  "zIndex": { ... }       // Z-index values
}`} />
      </Section>

      <Section title="Token Value Formats">
        <CodeBlock code={`// Simple value
"primary": "#6366f1"

// Object with value
"primary": { "value": "#6366f1" }

// Derived value
"primary.400": {
  "value": "#894eef",
  "derive": { "from": "colors.primary.500", "method": "lighten", "amount": 0.1 }
}

// Harmony value
"accent": {
  "value": "#83c512",
  "harmony": { "from": "colors.primary.500", "type": "complementary" }
}`} />
      </Section>
    </>
  );
}

function RelationshipsDoc() {
  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>Token Relationships</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        Relationships define how tokens relate to each other.
      </p>

      <Section title="Derivation (lighten/darken)">
        <CodeBlock code={`{
  "type": "derive",
  "from": "colors.primary.500",
  "to": "colors.primary.400",
  "method": "lighten",
  "amount": 0.1
}`} />
        <p style={{ color: '#94a3b8' }}>
          Supported methods: <code>lighten</code>, <code>darken</code>,{' '}
          <code>mix-white</code>, <code>mix-black</code>
        </p>
      </Section>

      <Section title="Harmony (complementary)">
        <CodeBlock code={`{
  "type": "harmony",
  "from": "colors.primary.500",
  "to": "colors.accent",
  "method": "complementary"
}`} />
      </Section>

      <Section title="Contrast (accessibility)">
        <CodeBlock code={`{
  "type": "contrast",
  "from": "text.onPrimary",
  "to": "colors.primary.500",
  "targetRatio": 4.5
}`} />
      </Section>
    </>
  );
}

function AdaptersDoc() {
  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>Source Adapters</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        DSaaS is source-agnostic. Adapters convert different token formats into
        the canonical NormalizedSource representation.
      </p>

      <Section title="Current Adapters">
        <div style={{ display: 'grid', gap: 12 }}>
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>🔌 JSON Adapter</h3>
            <p style={{ color: '#94a3b8', fontSize: 14 }}>
              Accepts plain JSON tokens. Perfect for teams using Tailwind, Bootstrap, or MUI.
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>🔌 ChainCSS Adapter</h3>
            <p style={{ color: '#94a3b8', fontSize: 14 }}>
              Accepts ChainCSS tokens with derive, harmony, and contrast relationships.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Future Adapters">
        <ul style={{ color: '#94a3b8', lineHeight: 2 }}>
          <li>Figma Adapter</li>
          <li>Style Dictionary Adapter</li>
          <li>Tokens Studio Adapter</li>
          <li>CSS Custom Properties Adapter</li>
        </ul>
      </Section>
    </>
  );
}

function EmittersDoc() {
  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>Output Emitters</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        Emitters convert the DesignSystemIR into framework-specific output.
      </p>

      <Section title="Available Emitters">
        <div style={{ display: 'grid', gap: 12 }}>
          {[
            { name: 'CSS Variables', file: 'tokens.css' },
            { name: 'SCSS', file: '_tokens.scss' },
            { name: 'Tailwind', file: 'tailwind.config.generated.js' },
            { name: 'Bootstrap', file: '_bootstrap-theme.scss' },
            { name: 'MUI', file: 'mui-theme.ts' },
            { name: 'JSON', file: 'design-system.json' },
          ].map((emitter) => (
            <div key={emitter.name} className="card" style={{ padding: 16 }}>
              <h3 style={{ marginBottom: 4 }}>📤 {emitter.name}</h3>
              <p style={{ color: '#94a3b8', fontSize: 13 }}>{emitter.file}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function CliDoc() {
  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>CLI Commands</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        The DSaaS CLI is your interface to the platform.
      </p>

      <Section title="Commands">
        <CodeBlock code={`# Initialize a new design system
dsaas init <name>

# Publish a design system
dsaas publish

# Install a design system
dsaas install <package>

# List published design systems
dsaas list

# Validate and compile
dsaas validate

# Compare versions
dsaas diff <package> <fromVersion> <toVersion>

# List available targets
dsaas targets

# Start the registry server
dsaas serve`} />
      </Section>
    </>
  );
}

function ApiDoc() {
  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>API Reference</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        DSaaS exposes a REST API for programmatic access.
      </p>

      <Section title="Endpoints">
        <CodeBlock code={`# Health check
GET /api/health

# List packages
GET /api/packages

# Get latest manifest
GET /api/packages/:name/latest

# Get tokens
GET /api/packages/:name/latest/tokens

# Get graph
GET /api/packages/:name/latest/graph

# Publish (requires auth)
POST /api/publish

# Validate (requires auth)
POST /api/validate

# Full compile
POST /api/full-compile

# List targets
GET /api/targets`} />
      </Section>
    </>
  );
}

function AccessibilityDoc() {
  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>Accessibility</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        DSaaS checks WCAG contrast ratios at compile time.
      </p>

      <Section title="What's Checked">
        <ul style={{ color: '#94a3b8', lineHeight: 2 }}>
          <li>✅ Contrast ratio (WCAG 1.4.3) — 4.5:1 for normal text</li>
          <li>✅ Font size minimum (WCAG 1.4.4) — 12px minimum</li>
          <li>✅ Touch target size (WCAG 2.5.8) — 44×44px minimum</li>
          <li>✅ Focus visible (WCAG 2.4.7)</li>
          <li>✅ Reduced motion (WCAG 2.3.3)</li>
          <li>✅ Hover without focus (WCAG 1.4.13)</li>
        </ul>
      </Section>
    </>
  );
}