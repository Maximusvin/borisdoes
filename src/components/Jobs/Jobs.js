import { Table } from 'UI';
import { Skeleton } from 'components';

const Jobs = ({ jobs, isLoading }) =>
  !isLoading ? <Table data={jobs} /> : <Skeleton />;

export default Jobs;
