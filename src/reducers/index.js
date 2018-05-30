import {combineReducers} from 'redux';
import CompaniesReducer from './company-reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    companies: CompaniesReducer,
    form: formReducer
});

export default rootReducer;