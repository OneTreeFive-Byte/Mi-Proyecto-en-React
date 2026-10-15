import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Layout = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <NavBar />
    <main style={{ flex: 1, padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;