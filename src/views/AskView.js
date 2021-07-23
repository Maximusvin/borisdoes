import { useState, useEffect } from 'react';
import { Newest } from 'components';
import { SectionWrap, PaginationBox } from 'UI';
import { fetchAsk } from 'services/article-api';
import { usePages, useLoader } from 'hooks';

const totalPage = 2;

export const AskView = () => {
  const [ask, setAsk] = useState([]);
  const [error, setError] = useState(null);

  const { page, handleChangePage } = usePages();
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    fetchAsk(page)
      .then(data => setAsk(data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [page, setIsLoading]);

  return (
    <>
      <SectionWrap title="Ask">
        {!error ? (
          <Newest newest={ask} isLoading={isLoading} />
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
