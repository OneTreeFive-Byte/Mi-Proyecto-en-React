import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const total = getTotalItems();

  return (
    <Link to="/carrito" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
      🛒 {total > 0 && (
        <span style={{ background: 'red', padding: '2px 6px', borderRadius: '50%', fontSize: '0.8rem' }}>
          {total}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
