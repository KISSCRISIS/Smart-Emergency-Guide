export default function Page() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f172a',
        color: 'white',
        fontFamily: 'Arial',
        padding: '24px',
      }}
    >
      <section style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>
          Smart Emergency Guide
        </h1>

        <p style={{ fontSize: '22px', color: '#cbd5e1' }}>
          Emergency Medicine Learning Platform
        </p>

        <div
          style={{
            marginTop: '28px',
            padding: '24px',
            border: '1px solid rgba(255,255,255,.2)',
            borderRadius: '20px',
            background: 'rgba(255,255,255,.08)',
          }}
        >
          <p>
            الموقع يعمل الآن. هذه صفحة بداية مؤقتة، وبعدها نضيف التصميم والمحتوى الكامل.
          </p>
        </div>
      </section>
    </main>
  );
}