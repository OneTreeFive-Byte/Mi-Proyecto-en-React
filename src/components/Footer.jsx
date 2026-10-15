const Footer = () => (
  <footer style={{ padding: '2rem', background: '#222', color: 'white', textAlign: 'center', marginTop: '2rem' }}>
    <p>© 2026 Mi Empresa S.A. - Todos los derechos reservados.</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
      <div style={{ background: '#444', padding: '1rem', borderRadius: '8px' }}>
        <h4>Ana García</h4><p>CEO</p>
      </div>
      <div style={{ background: '#444', padding: '1rem', borderRadius: '8px' }}>
        <h4>Luis Pérez</h4><p>CTO</p>
      </div>
      <div style={{ background: '#444', padding: '1rem', borderRadius: '8px' }}>
        <h4>María López</h4><p>CMO</p>
      </div>
    </div>
  </footer>
);

export default Footer;
