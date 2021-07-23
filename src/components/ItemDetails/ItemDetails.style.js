import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 80%;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  background: #fff;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 100px;
  padding: 10px 15px;
  background: #57ba41;
  border-radius: 5px;
  transition: all 0.2s linear;
  text-align: center;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  color: #999;
  font-size: 14px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #888;
`;

export const Info = styled.div`
  margin-bottom: 10px;
  font-size: 10px;
  text-align: right;
  color: #999;
`;

export const HomeButton = styled.div`
  display: block;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 15px;
  background: rgb(153, 153, 153, 0.3);
  transition: all 0.2s linear;
  font-size: 10px;

  &:hover {
    background: rgb(153, 153, 153, 1);
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin-bottom: 20px;
`;

export const Item = styled.li`
  padding: 15px 0;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
