import { combineReducers } from 'redux';
import authReducer from './authReducer';
import PortfolioReducer from './PortfolioReducer';
import ProductReducer from './ProductReducer';
import category from './category';
import panierReducer from './panierReducer';
export default combineReducers({ authReducer,PortfolioReducer,ProductReducer, category,panierReducer});
