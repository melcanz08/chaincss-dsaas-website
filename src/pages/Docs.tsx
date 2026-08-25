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
              onMouseEnter={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.background = '#334155';
                  e.currentTarget.style.color = '#f1f5f9';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#94a3b8';
                }
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
        maxWidth: 900,
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
      <h2 style={{ 
        fontSize: 24, 
        fontWeight: 700, 
        marginBottom: 16,
        color: '#f1f5f9',
        borderBottom: '1px solid #334155',
        paddingBottom: 8,
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      {title && (
        <div style={{
          padding: '8px 16px',
          background: '#334155',
          borderRadius: '8px 8px 0 0',
          fontSize: 12,
          fontWeight: 600,
          color: '#94a3b8',
          fontFamily: 'monospace',
        }}>
          {title}
        </div>
      )}
      <pre style={{
        background: '#020617',
        border: '1px solid #334155',
        borderRadius: title ? '0 0 8px 8px' : 8,
        padding: 16,
        fontSize: 13,
        fontFamily: 'monospace',
        overflowX: 'auto',
        color: '#e2e8f0',
        lineHeight: 1.6,
        margin: 0,
      }}>
        {code}
      </pre>
    </div>
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

      <Section title="Prerequisites">
        <CodeBlock code={`# Node.js 18 or higher
node --version

# npm or yarn
npm --version`} />
      </Section>

      <Section title="1. Initialize a Design System">
        <CodeBlock code={`# Create a new design system
dsaas init my-design-system

# Navigate to the directory
cd my-design-system

# The structure created:
# my-design-system/
# ├── tokens/
# │   └── colors.chain.ts
# ├── components/
# │   └── button.chain.ts
# └── dsaas.config.json`} />
      </Section>

      <Section title="2. Define Tokens">
        <CodeBlock 
          title="tokens/colors.chain.ts"
          code={`export default {
  colors: {
    primary: {
      500: { value: '#7c3aed' },
      400: {
        value: '#894eef',
        derive: { 
          from: 'colors.primary.500', 
          method: 'lighten', 
          amount: 0.1 
        }
      },
      600: {
        value: '#632ebe',
        derive: { 
          from: 'colors.primary.500', 
          method: 'darken', 
          amount: 0.2 
        }
      }
    },
    accent: {
      value: '#83c512',
      harmony: { 
        from: 'colors.primary.500', 
        type: 'complementary' 
      }
    }
  },
  spacing: {
    sm: { value: '8px' },
    md: { value: '16px' },
    lg: { value: '24px' }
  },
  typography: {
    fontFamily: { value: 'Inter, sans-serif' },
    fontSize: {
      sm: { value: '14px' },
      md: { value: '16px' },
      lg: { value: '18px' }
    }
  }
}`} />
      </Section>

      <Section title="3. Validate Your Design System">
        <CodeBlock code={`# Validate tokens and relationships
dsaas validate

# Expected output:
# ✅ Tokens validated
# ✅ Relationships resolved
# ✅ Accessibility checks passed`} />
      </Section>

      <Section title="4. Start the Registry (Optional)">
        <CodeBlock code={`# Start local registry server
dsaas serve

# Server running at http://localhost:3000`} />
      </Section>

      <Section title="5. Publish Your Design System">
        <CodeBlock code={`# Publish to registry
dsaas publish

# Publish with specific targets
dsaas publish -t css,tailwind,mui

# Expected output:
# 📦 Publishing my-design-system...
# ✅ Version 1.0.0 published
# ✅ Targets: css, tailwind, mui`} />
      </Section>

      <Section title="6. Install in Your Project">
        <CodeBlock code={`# Install for specific framework
dsaas install my-design-system

# The outputs will be generated for your configured targets:
# tokens.css
# _tokens.scss
# tailwind.config.generated.js
# _bootstrap-theme.scss
# mui-theme.ts`} />
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
        They represent the smallest units of design decisions.
      </p>

      <Section title="Token Categories">
        <CodeBlock code={`{
  "colors": { ... },      // Color palette
  "spacing": { ... },     // Spacing scale
  "typography": { ... },  // Font families, sizes, weights
  "radius": { ... },      // Border radius
  "shadows": { ... },     // Box shadows
  "zIndex": { ... },      // Z-index values
  "breakpoints": { ... }  // Responsive breakpoints
}`} />
      </Section>

      <Section title="Token Value Formats">
        <CodeBlock code={`// Simple value
"primary": "#6366f1"

// Object with value
"primary": { "value": "#6366f1" }

// Nested values
"primary": {
  "500": { "value": "#7c3aed" },
  "400": { "value": "#894eef" }
}

// Derived value (lighten/darken)
"primary.400": {
  "value": "#894eef",
  "derive": { 
    "from": "colors.primary.500", 
    "method": "lighten", 
    "amount": 0.1 
  }
}

// Harmony value (complementary)
"accent": {
  "value": "#83c512",
  "harmony": { 
    "from": "colors.primary.500", 
    "type": "complementary" 
  }
}`} />
      </Section>

      <Section title="Typography Tokens">
        <CodeBlock code={`{
  "typography": {
    "fontFamily": {
      "base": { "value": "Inter, sans-serif" },
      "mono": { "value": "JetBrains Mono, monospace" }
    },
    "fontSize": {
      "xs": { "value": "12px" },
      "sm": { "value": "14px" },
      "md": { "value": "16px" },
      "lg": { "value": "18px" },
      "xl": { "value": "20px" }
    },
    "fontWeight": {
      "normal": { "value": "400" },
      "medium": { "value": "500" },
      "bold": { "value": "700" }
    },
    "lineHeight": {
      "tight": { "value": "1.25" },
      "normal": { "value": "1.5" },
      "loose": { "value": "1.75" }
    }
  }
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
        Relationships define how tokens relate to each other. DSaaS supports three types:
        derivation, harmony, and contrast.
      </p>

      <Section title="Derivation (lighten/darken)">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Derive a token value from another token by lightening or darkening it.
        </p>
        <CodeBlock code={`{
  "type": "derive",
  "from": "colors.primary.500",
  "to": "colors.primary.400",
  "method": "lighten",
  "amount": 0.1
}`} />
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Supported methods:
        </p>
        <ul style={{ color: '#94a3b8', lineHeight: 2, marginBottom: 16 }}>
          <li><code>lighten</code> - Lighten the source color</li>
          <li><code>darken</code> - Darken the source color</li>
          <li><code>mix-white</code> - Mix with white</li>
          <li><code>mix-black</code> - Mix with black</li>
        </ul>
      </Section>

      <Section title="Harmony (complementary)">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Generate harmonious colors based on color theory.
        </p>
        <CodeBlock code={`{
  "type": "harmony",
  "from": "colors.primary.500",
  "to": "colors.accent",
  "method": "complementary"
}`} />
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Supported harmony types:
        </p>
        <ul style={{ color: '#94a3b8', lineHeight: 2, marginBottom: 16 }}>
          <li><code>complementary</code> - Opposite on color wheel (180°)</li>
          <li><code>analogous</code> - Adjacent colors (30°)</li>
          <li><code>triadic</code> - Three colors (120° apart)</li>
          <li><code>tetradic</code> - Four colors (90° apart)</li>
        </ul>
      </Section>

      <Section title="Contrast (accessibility)">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Define contrast requirements between tokens for accessibility.
        </p>
        <CodeBlock code={`{
  "type": "contrast",
  "from": "text.onPrimary",
  "to": "colors.primary.500",
  "targetRatio": 4.5
}`} />
        <p style={{ color: '#94a3b8' }}>
          The compiler will check if the contrast ratio meets the target and
          flag violations in the accessibility report.
        </p>
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
              Accepts plain JSON tokens. Supports nesting, references, and all token categories.
              Perfect for teams using Tailwind, Bootstrap, or MUI.
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>🔌 ChainCSS Adapter</h3>
            <p style={{ color: '#94a3b8', fontSize: 14 }}>
              Accepts ChainCSS tokens (.chain.ts files) with derive, harmony, and contrast relationships.
              Supports components and intents for advanced design systems.
            </p>
          </div>
        </div>
      </Section>

      <Section title="ChainCSS Format">
        <CodeBlock 
          title="tokens/colors.chain.ts"
          code={`export default {
  colors: {
    primary: {
      500: { value: '#7c3aed' },
      400: {
        value: '#894eef',
        derive: { 
          from: 'colors.primary.500', 
          method: 'lighten', 
          amount: 0.1 
        }
      }
    },
    accent: {
      value: '#83c512',
      harmony: { 
        from: 'colors.primary.500', 
        type: 'complementary' 
      }
    }
  }
}`} />
      </Section>

      <Section title="Future Adapters">
        <ul style={{ color: '#94a3b8', lineHeight: 2 }}>
          <li>Figma Adapter (in progress)</li>
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
        Each emitter generates files optimized for its target framework.
      </p>

      <Section title="Available Emitters">
        <div style={{ display: 'grid', gap: 12 }}>
          {[
            { 
              name: 'CSS Variables', 
              file: 'tokens.css',
              description: 'Native CSS custom properties for modern web apps'
            },
            { 
              name: 'SCSS Variables', 
              file: '_tokens.scss',
              description: 'Sass variables and mixins for SCSS projects'
            },
            { 
              name: 'Tailwind Config', 
              file: 'tailwind.config.generated.js',
              description: 'Tailwind CSS theme configuration'
            },
            { 
              name: 'Bootstrap Theme', 
              file: '_bootstrap-theme.scss',
              description: 'Bootstrap theme overrides and variables'
            },
            { 
              name: 'MUI Theme', 
              file: 'mui-theme.ts',
              description: 'Material-UI theme object for React applications'
            },
            { 
              name: 'JSON', 
              file: 'design-system.json',
              description: 'Canonical design system IR for custom integrations'
            },
          ].map((emitter) => (
            <div key={emitter.name} className="card" style={{ padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <span style={{ fontSize: 24 }}>📤</span>
                <div>
                  <h3 style={{ marginBottom: 0, fontSize: 16 }}>{emitter.name}</h3>
                  <code style={{ fontSize: 12, color: '#a78bfa' }}>{emitter.file}</code>
                </div>
              </div>
              <p style={{ color: '#94a3b8', fontSize: 14, margin: 0 }}>
                {emitter.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Emitter Output Example">
        <CodeBlock 
          title="tokens.css (CSS Variables Emitter)"
          code={`:root {
  --colors-primary-400: #894eef;
  --colors-primary-500: #7c3aed;
  --colors-primary-600: #632ebe;
  --colors-accent: #83c512;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --typography-fontFamily: Inter, sans-serif;
  --typography-fontSize-sm: 14px;
  --typography-fontSize-md: 16px;
}`} />
      </Section>
    </>
  );
}

function CliDoc() {
  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>CLI Commands</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        The DSaaS CLI is your complete interface to the platform.
      </p>

      <Section title="Global Options">
        <CodeBlock code={`-V, --version              Output the version number
-h, --help                 Display help for command
-r, --registry <url>       Registry URL (default: "http://localhost:3000")`} />
      </Section>

      <Section title="init - Initialize a Design System">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Create a new design system with the proper folder structure.
        </p>
        <CodeBlock code={`# Basic usage
dsaas init my-design-system

# Creates:
# my-design-system/
# ├── tokens/
# │   └── colors.chain.ts
# ├── components/
# │   └── button.chain.ts
# └── dsaas.config.json`} />
      </Section>

      <Section title="publish - Publish to Registry">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Publish your design system to the registry with optional targets and tags.
        </p>
        <CodeBlock code={`# Basic publish
dsaas publish

# Publish with specific targets
dsaas publish -t css,scss,tailwind

# Publish with a custom tag
dsaas publish --tag beta

# Publish to custom registry
dsaas publish -r https://my-registry.com`} />
      </Section>

      <Section title="install - Install a Design System">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Install a published design system package.
        </p>
        <CodeBlock code={`# Install latest version
dsaas install my-design-system

# Install specific version
dsaas install my-design-system@1.0.0

# Install from custom registry
dsaas install my-design-system -r https://my-registry.com`} />
      </Section>

      <Section title="list - List Published Packages">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          List all published design systems in the registry.
        </p>
        <CodeBlock code={`# List all packages
dsaas list

# List from custom registry
dsaas list -r https://my-registry.com`} />
      </Section>

      <Section title="build - Build Locally">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Build a design system locally to canonical IR without publishing.
        </p>
        <CodeBlock code={`# Build with default settings
dsaas build

# Build with specific targets
dsaas build -t css,tailwind,mui

# Build with custom registry
dsaas build -r https://my-registry.com`} />
      </Section>

      <Section title="validate - Validate Design System">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Validate and compile a design system to canonical IR.
        </p>
        <CodeBlock code={`# Validate current design system
dsaas validate

# Validate against custom registry
dsaas validate -r https://my-registry.com`} />
      </Section>

      <Section title="diff - Compare Versions">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Compare two versions of a design system.
        </p>
        <CodeBlock code={`# Compare versions
dsaas diff my-design-system 1.0.0 2.0.0

# Compare with custom registry
dsaas diff my-design-system 1.0.0 2.0.0 -r https://my-registry.com`} />
      </Section>

      <Section title="figma - Figma Integration">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Integrate with Figma for token synchronization.
        </p>
        <CodeBlock code={`# Check Figma integration status
dsaas figma status

# Push tokens to Figma
dsaas figma push -f <file-id> -t <figma-token>

# Pull tokens from Figma
dsaas figma pull -f <file-id> -t <figma-token>`} />
      </Section>

      <Section title="targets - List Available Targets">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          List all available output targets.
        </p>
        <CodeBlock code={`# List targets from default registry
dsaas targets

# List targets from custom registry
dsaas targets -r https://my-registry.com

# Output:
# Available targets:
#   - css
#   - scss
#   - tailwind
#   - bootstrap
#   - mui
#   - json`} />
      </Section>

      <Section title="serve - Start Registry Server">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Start the DSaaS registry server locally.
        </p>
        <CodeBlock code={`# Start server on default port 3000
dsaas serve

# Start server on custom port
dsaas serve -p 8080

# Output:
# Registry running at http://localhost:8080`} />
      </Section>
    </>
  );
}

function ApiDoc() {
  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>API Reference</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        DSaaS exposes a REST API for programmatic access to the registry and compiler.
      </p>

      <Section title="Authentication">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Protected endpoints require a Bearer token in the Authorization header.
        </p>
        <CodeBlock code={`# Register a new user
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

# Response:
{
  "tokens": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
  },
  "user": {
    "id": "8d8399e4-...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "publisher"
  }
}

# Login
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

# Use the token:
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...`} />
      </Section>

      <Section title="Health & Readiness">
        <CodeBlock code={`# Health check
GET /api/health

Response:
{
  "status": "ok",
  "uptime": 3600,
  "timestamp": "2024-01-01T00:00:00.000Z",
  "storage": "ok"
}

# Readiness check
GET /api/ready

Response:
{
  "status": "ready"
}`} />
      </Section>

      <Section title="Package Endpoints (Public)">
        <CodeBlock code={`# List all packages
GET /api/packages

Response:
[
  {
    "name": "my-design-system",
    "versions": ["1.0.0", "1.0.1", "2.0.0"]
  }
]

# Get latest manifest
GET /api/packages/:name/latest

# Get latest tokens
GET /api/packages/:name/latest/tokens

# Get latest graph
GET /api/packages/:name/latest/graph

# Get specific version
GET /api/packages/:name/:version

# Filter outputs by target
GET /api/packages/:name/:version?target=css,tailwind

# Get tokens for specific version
GET /api/packages/:name/:version/tokens

# Get graph for specific version
GET /api/packages/:name/:version/graph`} />
      </Section>

      <Section title="Targets">
        <CodeBlock code={`# List available targets
GET /api/targets

Response:
{
  "targets": ["css", "scss", "tailwind", "bootstrap", "mui", "json"]
}`} />
      </Section>

      <Section title="Compilation (Public)">
        <CodeBlock code={`# Full compile (no auth required)
POST /api/full-compile
Content-Type: application/json

{
  "name": "my-design-system",
  "version": "1.0.0",
  "tokens": {
    "colors": {
      "primary": {
        "500": { "value": "#7c3aed" }
      }
    }
  },
  "targets": ["css", "tailwind", "mui"]
}

Response:
{
  "valid": true,
  "tokens": [...],
  "outputs": {
    "css": {
      "filename": "tokens.css",
      "content": ":root { ... }",
      "language": "css"
    },
    "tailwind": {
      "filename": "tailwind.config.generated.js",
      "content": "module.exports = { ... }",
      "language": "javascript"
    }
  },
  "a11y": [...],
  "graph": {
    "nodes": [...],
    "edges": [...]
  }
}`} />
      </Section>

      <Section title="Validate (Protected)">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Requires authentication with <code>write</code> scope.
        </p>
        <CodeBlock code={`# Validate design system
POST /api/validate
Authorization: Bearer <accessToken>
Content-Type: application/json

{
  "name": "my-design-system",
  "version": "1.0.0",
  "tokens": {
    "colors": {
      "primary": {
        "500": { "value": "#7c3aed" }
      }
    }
  },
  "targets": ["css", "tailwind"]
}

Response:
{
  "ir": {
    "tokens": [...],
    "graph": {...},
    "a11y": [...]
  }
}`} />
      </Section>

      <Section title="Publish (Protected)">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Requires authentication with <code>write</code> scope. Publishing is immutable - each version can only be published once.
        </p>
        <CodeBlock code={`# Publish design system
POST /api/publish
Authorization: Bearer <accessToken>
Content-Type: application/json

{
  "name": "my-design-system",
  "version": "1.0.0",
  "tokens": {
    "colors": {
      "primary": {
        "500": { "value": "#7c3aed" },
        "400": {
          "value": "#894eef",
          "derive": {
            "from": "colors.primary.500",
            "method": "lighten",
            "amount": 0.1
          }
        }
      }
    },
    "spacing": {
      "sm": { "value": "8px" },
      "md": { "value": "16px" }
    }
  },
  "targets": ["css", "scss", "tailwind", "bootstrap", "mui"],
  "tag": "latest",
  "metadata": {
    "description": "My design system",
    "author": "John Doe"
  }
}

Success Response:
{
  "success": true,
  "package": "my-design-system@1.0.0",
  "targets": ["css", "scss", "tailwind", "bootstrap", "mui"],
  "tokens": 16,
  "graphNodes": 17,
  "graphEdges": 3,
  "a11yChecks": 6
}

Error Response (version exists):
{
  "error": "Version 1.0.0 already exists. Publishing is immutable. Use a new version."
}`} />
      </Section>

      <Section title="Diff Versions (Protected)">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          Requires authentication with <code>read</code> scope.
        </p>
        <CodeBlock code={`# Compare two versions
POST /api/diff
Authorization: Bearer <accessToken>
Content-Type: application/json

{
  "name": "my-design-system",
  "fromVersion": "1.0.0",
  "toVersion": "2.0.0"
}

Response:
{
  "fromVersion": "1.0.0",
  "toVersion": "2.0.0",
  "added": [...],
  "removed": [...],
  "changed": [
    {
      "path": "colors.primary.500",
      "from": "#7c3aed",
      "to": "#8b5cf6"
    }
  ]
}`} />
      </Section>

      <Section title="Rate Limiting">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          All <code>/api</code> routes are rate-limited to 200 requests per minute.
        </p>
        <CodeBlock code={`# Rate limit exceeded response:
429 Too Many Requests
{
  "error": "Too many requests. Try again later."
}`} />
      </Section>

      <Section title="Error Responses">
        <CodeBlock code={`# Invalid package name
400 Bad Request
{ "error": "Invalid package name" }

# Package not found
404 Not Found
{ "error": "Package not found" }

# Unauthorized
401 Unauthorized
{ "error": "Authentication required" }

# Insufficient scope
403 Forbidden
{ "error": "Insufficient scope" }

# Version conflict
409 Conflict
{ "error": "Version 1.0.0 already exists. Publishing is immutable. Use a new version." }`} />
      </Section>
    </>
  );
}

function AccessibilityDoc() {
  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24 }}>Accessibility</h1>
      <p style={{ color: '#94a3b8', marginBottom: 24 }}>
        DSaaS checks WCAG contrast ratios at compile time and provides actionable feedback.
      </p>

      <Section title="What's Checked">
        <ul style={{ color: '#94a3b8', lineHeight: 2 }}>
          <li>✅ Contrast ratio (WCAG 1.4.3) — 4.5:1 for normal text</li>
          <li>✅ Large text contrast (WCAG 1.4.3) — 3:1 for large text</li>
          <li>✅ Font size minimum (WCAG 1.4.4) — 12px minimum</li>
          <li>✅ Touch target size (WCAG 2.5.8) — 44×44px minimum</li>
          <li>✅ Focus visible (WCAG 2.4.7)</li>
          <li>✅ Reduced motion (WCAG 2.3.3)</li>
          <li>✅ Hover without focus (WCAG 1.4.13)</li>
        </ul>
      </Section>

      <Section title="Accessibility Report">
        <CodeBlock code={`// After compilation, DSaaS generates an accessibility report
// in diagnostics.json

{
  "a11y": [
    {
      "check": "contrast-ratio",
      "status": "pass",
      "detail": "colors.primary.500 vs text.onPrimary"
    },
    {
      "check": "font-size-minimum",
      "status": "pass",
      "detail": "typography.fontSize.sm = 14px"
    },
    {
      "check": "touch-target-size",
      "status": "fail",
      "detail": "components.button.height = 36px (minimum 44px)"
    }
  ]
}`} />
      </Section>

      <Section title="Auto-Fix">
        <p style={{ color: '#94a3b8', marginBottom: 12 }}>
          DSaaS can automatically fix certain accessibility violations during compilation.
        </p>
        <CodeBlock code={`# Auto-fix contrast issues
dsaas validate --fix

# Or in the API
POST /api/validate
{
  "tokens": {...},
  "autoFix": true
}`} />
      </Section>
    </>
  );
}