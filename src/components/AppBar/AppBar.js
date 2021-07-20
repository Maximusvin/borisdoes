import PropTypes from 'prop-types';

import { Header, Logo, Navigation, NavLink } from './AppBar.style';
import logo from 'assets/images/logo.png';

const AppBar = () => {
  return (
    <Header>
      <Logo src={logo}></Logo>
      <Navigation>
        <NavLink to="/">News</NavLink>
        <NavLink to="/newest">Newest</NavLink>
        <NavLink to="/ask">Ask</NavLink>
        <NavLink to="/show">Show</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
      </Navigation>
    </Header>
  );
};

AppBar.defaultProps = {
  children: '',
};

AppBar.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AppBar;
