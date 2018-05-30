import React from 'react';
import _ from 'lodash';
import ProductListItem from "./product-list-item";

const ProductList = ({companies}) => {
    // We are using Lodash .map because the props we are using is actually an object instead a proper list as this content is coming from the reducers
    // and a global state, otherwise it wouldn't work at all!
    const productsList = _.map(companies, product => {
        return <ProductListItem product={product} key={product.id}/>
    })

    return <ul className="product-list">
        {productsList}
    </ul>
}

export default ProductList;