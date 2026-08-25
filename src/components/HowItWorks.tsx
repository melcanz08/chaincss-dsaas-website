// src/components/HowItWorks.tsx

const steps = [
  {
    step: '01',
    title: 'Define Your Tokens',
    description: 'Use JSON or ChainCSS syntax to define colors, spacing, typography, and relationships.',
    code: `{
  "colors": {
    "primary": {
      "500": { "value": "#7c3aed" },
      "400": {
        "value": "#894eef",
        "derive": { "from": "colors.primary.500", "method": "lighten", "amount": 0.1 }
      }
    }
  }
}`,
  },
  {
    step: '02',
    title: 'Publish to Registry',
    description: 'Version your design system and publish it to the DSaaS registry.',
    code: `$ dsaas publish

📦 Publishing my-design-system...
✅ Version 1.0.0 published
✅ 16 tokens compiled
✅ 3 relationships resolved`,
  },
  {
    step: '03',
    title: 'Generate Framework Output',
    description: 'Select your target frameworks and get generated configs instantly.',
    code: `$ dsaas install my-design-system --target tailwind
$ dsaas install my-design-system --target mui
$ dsaas install my-design-system --target bootstrap

✅ tailwind.config.generated.js
✅ mui-theme.ts
✅ _bootstrap-theme.scss`,
  },
  {
    step: '04',
    title: 'Consume Anywhere',
    description: 'Drop the generated files into your projects. Update tokens once, regenerate everywhere.',
    code: `// React + MUI
import { theme } from './mui-theme';

// Tailwind
// tailwind.config.generated.js

// Bootstrap
// _bootstrap-theme.scss`,
  },
];

export function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          From tokens to frameworks in four simple steps.
        </p>
        <div className="grid grid-2">
          {steps.map((step) => (
            <div key={step.step} className="card">
              <div style={{
                fontSize: 48,
                fontWeight: 900,
                color: '#6366f1',
                marginBottom: 12,
              }}>
                {step.step}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: 14, marginBottom: 16 }}>{step.description}</p>
              <pre style={{
                background: '#020617',
                border: '1px solid #334155',
                borderRadius: 8,
                padding: 16,
                fontSize: 12,
                fontFamily: 'monospace',
                overflowX: 'auto',
                color: '#e2e8f0',
                lineHeight: 1.6,
              }}>
                {step.code}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}