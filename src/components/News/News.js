import { SectionWrap, Table } from 'UI';

const News = ({ news }) => {
  return (
    <SectionWrap title="News">
      <Table data={news} />
    </SectionWrap>
  );
};

export default News;
