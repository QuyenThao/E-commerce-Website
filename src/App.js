import { Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
