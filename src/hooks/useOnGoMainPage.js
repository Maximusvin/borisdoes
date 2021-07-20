import { useLocation, useHistory } from 'react-router-dom';

export const useOnGoMainPage = () => {
  const location = useLocation();
  const history = useHistory();

  const onGoMainPage = () => {
    history.push((location.pathname = '/'));
  };

  return onGoMainPage;
};
