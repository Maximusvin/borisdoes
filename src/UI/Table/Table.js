import { useState } from 'react';
import { useDate, useSortItem } from 'hooks';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi';
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
} from './Table.style';

const List = ({ item }) => {
  const date = useDate(item.time);

  return (
    <ListItem>
      <DateTD>{date}</DateTD>
      <ItemLink to={`/item/${item.id}`}>{item.title}</ItemLink>
      <DomainTD>
        <a href={`http://${item.domain}`}>{item.domain}</a>
      </DomainTD>
    </ListItem>
  );
};

const Table = ({ data }) => {
  const [activeItem, setActiveItem] = useState();
  const [toggleTime, setToggleTime] = useState(false);
  const [toggleTitle, setToggleTitle] = useState(false);
  const [toggleDomain, setToggleDomain] = useState(false);

  const statusToggleFields = {
    toggleTime,
    toggleTitle,
    toggleDomain,
  };

  const sortItemList = useSortItem(data, activeItem, statusToggleFields);

  const getActiveTypeBySort = e => {
    const { name } = e.target;
    setActiveItem(name);

    switch (name) {
      case 'time': {
        setToggleTime(!toggleTime);
        break;
      }
      case 'title': {
        setToggleTitle(!toggleTitle);
        break;
      }
      case 'domain': {
        setToggleDomain(!toggleDomain);
        break;
      }
      default:
        return;
    }
  };

  return (
    <>
      <Thead>
        <HeadDateTD name="time" onClick={e => getActiveTypeBySort(e)}>
          Date
          {toggleTime ? <HiArrowNarrowDown /> : <HiArrowNarrowUp />}
        </HeadDateTD>
        <HeadTitleTD name="title" onClick={e => getActiveTypeBySort(e)}>
          Title
          {toggleTitle ? <HiArrowNarrowDown /> : <HiArrowNarrowUp />}
        </HeadTitleTD>
        <HeadDomainTD name="domain" onClick={e => getActiveTypeBySort(e)}>
          Domain
          {toggleDomain ? <HiArrowNarrowDown /> : <HiArrowNarrowUp />}
        </HeadDomainTD>
      </Thead>

      <NewsList>
        {sortItemList.map(item => (
          <List key={item.id} item={item} />
        ))}
      </NewsList>
    </>
  );
};

export default Table;
