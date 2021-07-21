import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentById } from 'services/products-api';
import { ItemDetails } from 'components';
import { useLoader, useOnGoMainPage } from 'hooks';

export const ItemDetailsView = () => {
  const [product, setProduct] = useState(null);
  const { isLoading, setIsLoading } = useLoader();
  const onGoMainPage = useOnGoMainPage();

  const { itemId } = useParams();

  console.log(itemId);

  useEffect(() => {
    setIsLoading(isLoading => !isLoading);

    fetchCommentById(itemId)
      .then(setProduct)
      .finally(() => setIsLoading(isLoading => !isLoading));
  }, [itemId, setIsLoading]);

  return (
    <>
      {product && (
        <ItemDetails
          product={product}
          isLoading={isLoading}
          onGoMainPage={onGoMainPage}
        />
      )}
    </>
  );
};
