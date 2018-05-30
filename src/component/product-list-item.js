import React from 'react';

const ProductListItem = ({product}) => {
    return <li className="product-list-item">
        <h1>{product.name}</h1>
        <em>{product.address}</em>
        <p>{product.description}</p>
    </li>
}

export default ProductListItem;