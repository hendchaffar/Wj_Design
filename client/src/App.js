import './App.css';
import { BrowserRouter, Switch,Link, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Spinner } from 'reactstrap';

import { getAuthUser } from './js/actions/authAction';
import  Category from "./components/pages/PagesCategory/Category";
import AppNavBar from './components/AppNavBar';
import PrivateRoute from './components/routes/PrivateRoute';
import CartShopping from './components/pages/CartShopping';
import Product from './components/pages/PagesProducts/Product'
import AddProduct from './components/pages/PagesProducts/AddProduct';
import Profile from './components/pages/Profile';
import Home from './components/pages/Home'
import { getCategory } from './js/actions/CategoryAction';
import Dashboard from './components/Admin/Dashboard';
import AddCategory from './components/pages/PagesCategory/AddCategory';
import Panier from './components/pages/Panier';
function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);
  const getUser = () => dispatch(getAuthUser());

  useEffect(() => {
    getUser();
    dispatch(getCategory())
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color:"info"  }}
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppNavBar />
      <Route exact path='/dashboard' component={Dashboard}/>
      <Switch>
      
        <Route path="/CartShopping/:id" component={CartShopping} />
      <Route exact path='/' component={Home}></Route>
      <Route path='/Profile' component={Profile}></Route>
      <PrivateRoute path='/panier' component={Panier}/>
      <Route path='/AddProduct' component={AddProduct}></Route>
      <Route path='/Category/:id' render={(props) => <Category {...props} />}></Route>
      <Route path='/AddCategory' component={AddCategory}></Route>
      <Route path='/Product' component={Product}  />
      </Switch>
    </BrowserRouter>
  );
}                  
//CartShopping <privat route> MA TINSECH YA 7OUNA
export default App;