import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('/data/productos.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === parseInt(id));
        setProduct(found || null);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Producto no encontrado</h2>
      <Link to="/productos">Volver al catálogo</Link>
    </div>
  );

  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <img src={product.image} alt={product.name} style={{ width: '300px', borderRadius: '8px' }} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>Precio: ${product.price}</h3>
        <p style={{ color: product.stock > 0 ? 'green' : 'red' }}>
          {product.stock > 0 ? `Stock disponible: ${product.stock}` : 'Sin stock'}
        </p>
        <button
          onClick={() => addToCart(product, 1)}
          disabled={product.stock === 0}
          style={{
            padding: '10px 20px',
            background: product.stock === 0 ? '#999' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
            fontSize: '1rem'
          }}
        >
          {product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;