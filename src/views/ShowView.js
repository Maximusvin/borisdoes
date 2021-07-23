import { useState, useEffect } from 'react';
import { Show } from 'components';
import { SectionWrap, PaginationBox } from 'UI';
import { fetchShow } from 'services/article-api';
import { usePages, useLoader } from 'hooks';

const totalPage = 2;

export const ShowView = () => {
  const [ask, setAsk] = useState([]);
  const [error, setError] = useState(null);

  const { page, handleChangePage } = usePages();
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    fetchShow(page)
      .then(data => setAsk(data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [page, setIsLoading]);

  return (
    <>
      <SectionWrap title="Show">
        {!error ? <Show show={ask} isLoading={isLoading} /> : <div>Error</div>}

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
