import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav style={{ padding: '1rem', background: '#f4f4f4', textAlign: 'center' }}>
    <Link to="/" style={{ margin: '0 15px', textDecoration: 'none' }}>Inicio</Link>
    <Link to="/productos" style={{ margin: '0 15px', textDecoration: 'none' }}>Productos</Link>
    <Link to="/carrito" style={{ margin: '0 15px', textDecoration: 'none' }}>Carrito</Link>
  </nav>
);

export default NavBar;
