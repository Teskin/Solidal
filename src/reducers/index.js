import {combineReducers} from 'redux';
import CompaniesReducer from './company-reducer';
import ProductsReducer from './products-reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    companies: CompaniesReducer,
    products: ProductsReducer,
    form: formReducer
});

export default rootReducer;