import axios from 'axios';

export const FETCH_COMPANIES = 'fetch_companies';
export const FETCH_PRODUCTS = 'fetch_products';
export const FETCH_CATEGORIES = 'feth_categories';

export const CREATE_COMPANY = 'create_company';
export const CREATE_PRODUCT = 'create_product';
export const CREATE_CATEGORY =  'create_category';

const API_URL = "http://192.168.202.69:8080/api";

export function fetchCompanies() {
    const request = axios.get(`${API_URL}/companies`);

    // Once this action arrives to the reducers, passing through middleware Redux-promise
    // which will resolve automatically the request, it will contain the actual array of items.
    return {type: FETCH_COMPANIES, payload: request};
}