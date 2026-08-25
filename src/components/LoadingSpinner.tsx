// src/components/LoadingSpinner.tsx
export function LoadingSpinner({ size = 24 }: { size?: number }) {
  return (
    <div style={{
      display: 'inline-block',
      width: size,
      height: size,
      border: '3px solid rgba(99, 102, 241, 0.1)',
      borderTopColor: '#6366f1',
      borderRadius: '50%',
      animation: 'spin 0.6s linear infinite',
    }} />
  );
}