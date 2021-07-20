import { Route, Switch } from 'react-router-dom';
import { NotFoundView, HomeView, NewestView } from 'views';
import { AppBar } from 'components';

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/newest" component={NewestView} />
        <Route path="/ask" component={HomeView} />
        <Route path="/show" component={HomeView} />
        <Route path="/jobs" component={HomeView} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default App;
