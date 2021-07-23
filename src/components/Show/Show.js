import { Table } from 'UI';
import { Skeleton } from 'components';

const Show = ({ show, isLoading }) =>
  !isLoading ? <Table data={show} /> : <Skeleton />;

export default Show;
