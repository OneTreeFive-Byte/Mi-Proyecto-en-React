import { useEffect, useState } from 'react';
import Item from '../components/Item';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/productos.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  return (
    <div>
      <h2>Nuestros Productos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {products.map(product => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;