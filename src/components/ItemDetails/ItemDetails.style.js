import styled from 'styled-components';

export const Article = styled.article`
  width: 500px;
  margin-top: 80px;
  padding: 40px;
  background: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 100px;
  padding: 10px 15px;
  background: #57ba41;
  border-radius: 5px;
  transition: all 0.2s linear;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  color: #999;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardPrice = styled.span`
  font-size: 30px;
  font-weight: 700;
  line-height: 3rem;
  color: #303030;
`;

export const CartButton = styled.button`
  display: block;
  cursor: pointer;
  padding: 10px 15px;
  background: #57ba41;
  border-radius: 5px;
  transition: all 0.2s linear;

  &:hover {
    background: #e25c1d;
  }
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
