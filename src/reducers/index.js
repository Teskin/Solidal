import {combineReducers} from 'redux';
import CompaniesReducer from './company-reducer';

const rootReducer = combineReducers({
    companies: CompaniesReducer
});

export default rootReducer;