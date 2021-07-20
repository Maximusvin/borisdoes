import { Route, Switch } from 'react-router-dom';
import { NotFoundView } from 'views';
// import { ROUTE_PATHS } from 'utils/route-paths';

const App = () => {
  return (
    <>
      <Switch>
        {/* <Route path={ROUTE_PATHS._()} exact component={ContactsView} /> */}
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
