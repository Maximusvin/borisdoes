import { Table } from 'UI';
import { Skeleton } from 'components';

const News = ({ newest, isLoading }) =>
  !isLoading ? <Table data={newest} /> : <Skeleton />;

export default News;
