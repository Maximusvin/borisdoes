import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentById } from 'services/article-api';
import { ItemDetails } from 'components';
import { useLoader, useOnGoMainPage } from 'hooks';

export const ItemDetailsView = () => {
  const [item, setItem] = useState(null);
  const { isLoading, setIsLoading } = useLoader();
  const onGoMainPage = useOnGoMainPage();

  const { itemId } = useParams();

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    fetchCommentById(itemId)
      .then(setItem)
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [itemId, setIsLoading]);

  return (
    <>
      {item && (
        <ItemDetails
          item={item}
          isLoading={isLoading}
          onGoMainPage={onGoMainPage}
        />
      )}
    </>
  );
};
