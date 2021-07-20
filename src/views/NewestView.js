import { useState, useEffect } from 'react';
import { fetchNewest } from 'services/products-api';
import { usePages } from 'hooks';

export const NewestView = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const { page, setTotalPage } = usePages();
  // const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    // setIsLoading(isLoading => !isLoading);

    fetchNewest(page)
      .then(data => setProducts(data))
      .catch(error => setError(error));
    // .finally(() => setIsLoading(isLoading => !isLoading));
  }, [page, setTotalPage]);

  return (
    <>
      {!error ? (
        products &&
        products.map(product => <div key={product.id}>{product.title}</div>)
      ) : (
        <div>Error</div>
      )}
    </>
  );
};
