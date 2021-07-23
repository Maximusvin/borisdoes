import { Layout, LoaderUI } from 'UI';
import { useDate } from 'hooks';
import {
  Wrapper,
  HeaderInfo,
  Title,
  Location,
  Info,
  HomeButton,
  List,
  Item,
  CommentHeader,
} from './ItemDetails.style';

const ListItems = ({ data }) => {
  const dateCr = useDate(data.time);
  console.log(data);

  return (
    <Item key={data.id}>
      <CommentHeader>
        <p>User: {data.user}</p>
        <p> {dateCr}</p>
      </CommentHeader>
      {data.content.slice(3)}
    </Item>
  );
};

const ItemDetails = ({ item, isLoading, onGoMainPage }) => {
  const { title, time, comments, content, user, comments_count, url } = item;
  const dateCreate = useDate(time);

  return (
    <Layout>
      <Wrapper>
        {isLoading ? (
          <LoaderUI />
        ) : (
          <>
            <HeaderInfo>
              <HomeButton onClick={onGoMainPage}>
                Go back to the main
              </HomeButton>
              <Info>
                <p>User: {user}</p>
                <p>Create: {dateCreate}</p>
              </Info>
            </HeaderInfo>
            <Title>{title}</Title>

            <p>{content}</p>

            <Location>
              <p>
                Read article: <a href={`http://${url}`}> {url}</a>
              </p>
            </Location>

            <p>Comments count: {comments_count}</p>

            <List>
              {comments &&
                comments.map(comment => (
                  <ListItems data={comment} key={comment.id} />
                ))}
            </List>
          </>
        )}
      </Wrapper>
    </Layout>
  );
};

export default ItemDetails;
