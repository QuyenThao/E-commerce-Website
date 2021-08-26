import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <>
      <Navbar />
      <div className="body">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Shop} exact />
          <Route component={Error} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
