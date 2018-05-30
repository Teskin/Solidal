import axios from 'axios';

export const FETCH_COMPANIES = 'fetch_companies';
export const FETCH_PRODUCTS = 'fetch_products';
export const FETCH_CATEGORIES = 'feth_categories';

export const CREATE_COMPANY = 'create_company';
export const CREATE_PRODUCT = 'create_product';
export const CREATE_CATEGORY =  'create_category';

const API_URL = "http://192.168.202.69:8082/api";

export function fetchCompanies() {
    const request = axios.get(`${API_URL}/companies`);

    // Once this action arrives to the reducers, passing through middleware Redux-promise
    // which will resolve automatically the request, it will contain the actual array of items.
    return {type: FETCH_COMPANIES, payload: request};
}

// The callback parameter is called whenever the condition relate to the first parameter is respected.
// As a consequence, the callback function will be called.
export function createCompany(values, callback) {
    const request = axios.post(`${API_URL}/company`, values).then(() => {
        callback();
    });

    return {type: CREATE_COMPANY, payload: request}
}