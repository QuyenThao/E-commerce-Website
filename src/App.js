import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Error from './pages/Error';
import Home from './pages/Home';
import Shop from './pages/Shop';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
      <Navbar />
      <div className="body">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Shop} exact />
          <Route path="/products/:productId" component={DetailPage} />
          <Route component={Error} />
        </Switch>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
