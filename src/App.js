import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);
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
