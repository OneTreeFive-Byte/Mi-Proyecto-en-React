import CartWidget from './CartWidget';

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#333', color: 'white' }}>
    <h1>Mi-Proyecto-React</h1>
    <CartWidget />
  </header>
);

export default Header;

