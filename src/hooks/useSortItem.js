export const useSortItem = (currentList, activeItem, statusToggleFields) => {
  const newList = [...currentList];
  const { toggleTime, toggleTitle, toggleDomain } = statusToggleFields;

  const sortList = (list, by) => {
    return list.sort((a, b) => (toggleTime ? a[by] - b[by] : b[by] - a[by]));
  };

  const sortListByName = list => {
    return list.sort((a, b) =>
      toggleTitle
        ? a.title && a.title.localeCompare(b.title)
        : b.title && b.title.localeCompare(a.title),
    );
  };

  const sortListByDomain = list => {
    return list.sort((a, b) =>
      toggleDomain
        ? a.domain && a.domain.localeCompare(b.domain)
        : b.domain && b.domain.localeCompare(a.domain),
    );
  };

  let sortItemList = null;

  switch (activeItem) {
    case 'time': {
      sortItemList = sortList(newList, 'time');
      break;
    }
    case 'title': {
      sortItemList = sortListByName(newList);
      break;
    }
    case 'domain': {
      sortItemList = sortListByDomain(newList);
      break;
    }
    default:
      return newList;
  }

  return sortItemList;
};
