import { useState, useEffect } from 'react';
import { Newest } from 'components';
import { SectionWrap } from 'UI';
import { fetchNewest } from 'services/products-api';
import { usePages, useLoader } from 'hooks';

export const NewestView = () => {
  const [newest, setNews] = useState([]);
  const [error, setError] = useState(null);

  const { page, setTotalPage } = usePages();
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    fetchNewest(page)
      .then(data => setNews(data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [page, setIsLoading]);

  return (
    <>
      <SectionWrap title="Newest">
        {!error ? <Newest newest={newest} /> : <div>Error</div>}
      </SectionWrap>
    </>
  );
};
