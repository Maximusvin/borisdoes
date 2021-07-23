import { Route, Switch } from 'react-router-dom';
import {
  NotFoundView,
  HomeView,
  NewestView,
  ItemDetailsView,
  AskView,
  ShowView,
  JobsView,
} from 'views';
import { AppBar } from 'components';

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/newest" component={NewestView} />
        <Route path="/ask" component={AskView} />
        <Route path="/show" component={ShowView} />
        <Route path="/jobs" component={JobsView} />
        <Route path="/item/:itemId" component={ItemDetailsView} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
