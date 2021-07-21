import { useState, useEffect } from 'react';
import { News } from 'components';
import { usePages, useLoader } from 'hooks';
import { SectionWrap } from 'UI';
import { fetchNews } from 'services/products-api';

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
  }, [page, setIsLoading]);

  return (
    <SectionWrap title="News">
      {!error ? <News news={news} isLoading={isLoading} /> : <div>Error</div>}
    </SectionWrap>
  );
};
