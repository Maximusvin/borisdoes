import { useState } from 'react';
import { useDate, useSortItem } from 'hooks';
import {
  NewsList,
  ListItem,
  Thead,
  DateTD,
  TitleTD,
  DomainTD,
} from './Table.style';

const List = ({ item }) => {
  const date = useDate(item.time);

  return (
    <ListItem>
      <DateTD>{date}</DateTD>
      <TitleTD>{item.title}</TitleTD>
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
        <DateTD name="time" onClick={e => getActiveTypeBySort(e)}>
          Date
        </DateTD>
        <TitleTD name="title" onClick={e => getActiveTypeBySort(e)}>
          Title
        </TitleTD>
        <DomainTD name="domain" onClick={e => getActiveTypeBySort(e)}>
          Domain
        </DomainTD>
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
