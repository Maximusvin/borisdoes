import { useState, useEffect } from 'react';
import { Jobs } from 'components';
import { SectionWrap } from 'UI';
import { fetchJobs } from 'services/article-api';
import { usePages, useLoader } from 'hooks';

export const JobsView = () => {
  const [ask, setAsk] = useState([]);
  const [error, setError] = useState(null);

  const { page } = usePages();
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    fetchJobs(page)
      .then(data => setAsk(data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [page, setIsLoading]);

  return (
    <>
      <SectionWrap title="JobsView">
        {!error ? <Jobs jobs={ask} isLoading={isLoading} /> : <div>Error</div>}
      </SectionWrap>
    </>
  );
};
