// src/pages/Playground.tsx

import { useState } from 'react';

const defaultTokens = `{
  "colors": {
    "primary": {
      "500": { "value": "#7c3aed" },
      "400": {
        "value": "#894eef",
        "derive": { "from": "colors.primary.500", "method": "lighten", "amount": 0.1 }
      }
    },
    "accent": {
      "value": "#83c512",
      "harmony": { "from": "colors.primary.500", "type": "complementary" }
    }
  },
  "spacing": {
    "sm": { "value": "8px" },
    "md": { "value": "16px" }
  }
}`;

export function Playground() {
  const [tokensInput, setTokensInput] = useState(defaultTokens);
  const [targets, setTargets] = useState<string[]>(['css', 'tailwind', 'mui']);
  const [outputs, setOutputs] = useState<Record<string, string>>({});
  const [isCompiling, setIsCompiling] = useState(false);
  const [selectedTarget, setSelectedTarget] = useState('css');
  const [error, setError] = useState<string | null>(null);

  async function handleCompile() {
    setIsCompiling(true);
    setError(null);
    try {
      const tokens = JSON.parse(tokensInput);
      
      const response = await fetch('http://localhost:3000/api/full-compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tokens,
          targets,
          name: 'playground',
          version: '1.0.0',
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'HTTP error' }));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }
      
      const result = await response.json();
      
      const outputMap: Record<string, string> = {};
      if (result.outputs) {
        for (const [target, output] of Object.entries(result.outputs)) {
          outputMap[target] = (output as any).content || JSON.stringify(output, null, 2);
        }
      }
      setOutputs(outputMap);
      if (Object.keys(outputMap).length > 0) {
        setSelectedTarget(Object.keys(outputMap)[0]);
      }
    } catch (err: any) {
      setError(err.message);
      setOutputs({});
    } finally {
      setIsCompiling(false);
    }
  }

  const availableTargets = ['css', 'scss', 'tailwind', 'bootstrap', 'mui', 'json'];

  function toggleTarget(target: string) {
    if (targets.includes(target)) {
      setTargets(targets.filter((t) => t !== target));
    } else {
      setTargets([...targets, target]);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      padding: '100px 24px 60px',
      maxWidth: 1400,
      margin: '0 auto',
    }}>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>
        DSaaS Playground
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: 32 }}>
        Test your design tokens and see multi-target output in real time.
        <span style={{ display: 'block', marginTop: 8, fontSize: 12 }}>
          ⚠️ Requires the DSaaS registry running at <code>localhost:3000</code>
        </span>
      </p>

      {/* Target Selector */}
      <div style={{ marginBottom: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {availableTargets.map((target) => (
          <button
            key={target}
            onClick={() => toggleTarget(target)}
            style={{
              padding: '8px 16px',
              border: targets.includes(target) ? '2px solid #6366f1' : '1px solid #334155',
              borderRadius: 20,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: targets.includes(target) ? 600 : 400,
              background: targets.includes(target) ? '#e0e7ff' : 'transparent',
              color: targets.includes(target) ? '#1e1e2e' : '#94a3b8',
            }}
          >
            {target}
          </button>
        ))}
        <button
          onClick={handleCompile}
          disabled={isCompiling}
          style={{
            marginLeft: 'auto',
            padding: '10px 20px',
            background: isCompiling ? '#4f46e5' : '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: isCompiling ? 'not-allowed' : 'pointer',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {isCompiling ? 'Compiling...' : 'Compile'}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div style={{
          background: '#ef444420',
          border: '1px solid #ef4444',
          color: '#ef4444',
          padding: '12px 16px',
          borderRadius: 8,
          marginBottom: 16,
          fontSize: 14,
        }}>
          ❌ {error}
        </div>
      )}

      {/* Main Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
      }}>
        {/* Input */}
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: 16,
          overflow: 'hidden',
        }}>
          <div style={{
            padding: '12px 16px',
            background: '#334155',
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: '#94a3b8',
          }}>
            Tokens Input (JSON)
          </div>
          <textarea
            value={tokensInput}
            onChange={(e) => setTokensInput(e.target.value)}
            spellCheck={false}
            style={{
              width: '100%',
              height: 500,
              padding: 16,
              background: '#020617',
              border: 'none',
              color: '#e2e8f0',
              fontFamily: 'monospace',
              fontSize: 13,
              lineHeight: 1.6,
              resize: 'vertical',
            }}
          />
        </div>

        {/* Output */}
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: 16,
          overflow: 'hidden',
        }}>
          <div style={{
            padding: '12px 16px',
            background: '#334155',
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: '#94a3b8',
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
          }}>
            {Object.keys(outputs).map((target) => (
              <button
                key={target}
                onClick={() => setSelectedTarget(target)}
                style={{
                  padding: '4px 12px',
                  border: selectedTarget === target ? '2px solid #6366f1' : '1px solid #334155',
                  borderRadius: 12,
                  cursor: 'pointer',
                  fontSize: 11,
                  fontWeight: selectedTarget === target ? 600 : 400,
                  background: selectedTarget === target ? '#e0e7ff' : 'transparent',
                  color: selectedTarget === target ? '#1e1e2e' : '#94a3b8',
                }}
              >
                {target.toUpperCase()}
              </button>
            ))}
          </div>
          <pre style={{
            width: '100%',
            height: 500,
            padding: 16,
            background: '#020617',
            border: 'none',
            color: '#4ade80',
            fontFamily: 'monospace',
            fontSize: 13,
            lineHeight: 1.6,
            overflow: 'auto',
            margin: 0,
          }}>
            {outputs[selectedTarget] || 'Compile to see output...'}
          </pre>
        </div>
      </div>
    </div>
  );
}