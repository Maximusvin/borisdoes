import { HiArrowNarrowUp } from 'react-icons/hi';
import { LoaderUI } from 'UI/LoaderUI';
import {
  NewsList,
  ListItem,
  Thead,
  DateTD,
  HeadTitleTD,
  DomainTD,
  HeadDomainTD,
  HeadDateTD,
  ItemLink,
} from 'UI/Table/Table.style';

const skeletonItem = Array(20).fill(0);

const Skeleton = () => {
  return (
    <>
      <Thead>
        <HeadDateTD>
          Date
          <HiArrowNarrowUp />
        </HeadDateTD>
        <HeadTitleTD>
          Title
          <HiArrowNarrowUp />
        </HeadTitleTD>
        <HeadDomainTD>
          Domain
          <HiArrowNarrowUp />
        </HeadDomainTD>
      </Thead>

      <NewsList>
        {skeletonItem.map((_, idx) => (
          <ListItem key={idx}>
            <DateTD>
              <LoaderUI />
            </DateTD>
            <ItemLink>
              <LoaderUI />
            </ItemLink>
            <DomainTD>
              <LoaderUI />
            </DomainTD>
          </ListItem>
        ))}
      </NewsList>
    </>
  );
};

export default Skeleton;
