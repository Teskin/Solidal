import React from 'react';
import ProductListItem from './product-list-item';

const ProductList = (props) => {
    const products = props.products.map((product) => {

        return <ProductListItem/>
    });

    return <ul className="product-list">{products}</ul>
}

export default ProductList;
