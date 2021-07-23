import { useState, useEffect } from 'react';
import { News } from 'components';
import { usePages, useLoader } from 'hooks';
import { SectionWrap, PaginationBox } from 'UI';
import { fetchNews } from 'services/article-api';

const totalPage = 10;

export const HomeView = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const { page, handleChangePage } = usePages();
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

      {totalPage > 1 && !isLoading && (
        <PaginationBox
          count={totalPage}
          currentPage={page}
          onChangePage={handleChangePage}
        />
      )}
    </SectionWrap>
  );
};
