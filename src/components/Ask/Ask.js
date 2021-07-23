import { Table } from 'UI';
import { Skeleton } from 'components';

const Ask = ({ ask, isLoading }) =>
  !isLoading ? <Table data={ask} /> : <Skeleton />;

export default Ask;
