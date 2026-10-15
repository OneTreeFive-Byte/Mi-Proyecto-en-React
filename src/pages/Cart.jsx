import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Tu carrito está vacío.</h2>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map(item => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '1rem 0' }}>
            <span>{item.name} (x{item.quantity})</span>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <h3 style={{ textAlign: 'right' }}>Total: ${getTotalPrice()}</h3>
      <button
        onClick={clearCart}
        style={{ padding: '10px 20px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', float: 'right' }}
      >
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Cart;
