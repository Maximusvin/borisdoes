import { useState, useEffect } from 'react';
import { Newest } from 'components';
import { SectionWrap, PaginationBox } from 'UI';
import { fetchNewest } from 'services/article-api';
import { usePages, useLoader } from 'hooks';

const totalPage = 10;

export const NewestView = () => {
  const [newest, setNews] = useState([]);
  const [error, setError] = useState(null);

  const { page, handleChangePage } = usePages();
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
        {!error ? (
          <Newest newest={newest} isLoading={isLoading} />
        ) : (
          <div>Error</div>
        )}

        {totalPage > 1 && !isLoading && (
          <PaginationBox
            count={totalPage}
            currentPage={page}
            onChangePage={handleChangePage}
          />
        )}
      </SectionWrap>
    </>
  );
};
