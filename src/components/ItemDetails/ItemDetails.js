import { Layout, LoaderUI } from 'UI';
import { useDate } from 'hooks';
import {
  Article,
  HeaderInfo,
  Title,
  Location,
  Info,
  HomeButton,
} from './ItemDetails.style';

const ItemDetails = ({ product, isLoading, addToOrder, onGoMainPage }) => {
  const { name, createdAt, origin, price, updatedAt } = product;
  const dateCreate = useDate(createdAt);
  const dateEdit = useDate(updatedAt);

  return (
    <Layout>
      <Article>
        {isLoading ? (
          <LoaderUI />
        ) : (
          <>
            <HeaderInfo>
              <HomeButton onClick={onGoMainPage}>
                Go back to the main
              </HomeButton>
              <Info>
                <p>Create: {dateCreate}</p>
                <p>Edit: {dateEdit}</p>
              </Info>
            </HeaderInfo>
            <Title>{name}</Title>
            <Location>
              <p>{origin}</p>
            </Location>
          </>
        )}
      </Article>
    </Layout>
  );
};

export default ItemDetails;
