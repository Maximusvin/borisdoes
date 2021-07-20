import { useState, useEffect } from 'react';
import { News } from 'components';
import { fetchNews } from 'services/products-api';
import { usePages, useLoader } from 'hooks';

export const HomeView = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const { page, setTotalPage } = usePages();
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    fetchNews(page)
      .then(data => setNews(data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [page, setIsLoading, setTotalPage]);

  return (
    <>
      {!error ? isLoading ? 'Loading' : <News news={news} /> : <div>Error</div>}
    </>
  );
};
