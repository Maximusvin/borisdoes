import { Table } from 'UI';
import { Skeleton } from 'components';

const News = ({ news, isLoading }) =>
  !isLoading ? <Table data={news} /> : <Skeleton />;

export default News;
