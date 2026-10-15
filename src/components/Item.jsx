import { Link } from 'react-router-dom';

const Item = ({ id, name, price, image }) => (
  <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', textAlign: 'center', width: '200px' }}>
    <img src={image} alt={name} style={{ width: '100%', borderRadius: '4px' }} />
    <h3>{name}</h3>
    <p>${price}</p>
    <Link
      to={`/producto/${id}`}
      style={{ padding: '8px 12px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}
    >
      Ver Detalle
    </Link>
  </div>
);

export default Item;
