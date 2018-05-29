import React from 'react';

const CompanyListItem = ({company}) => {
    return <li className="company-list-item">
        <h1>{company.name}</h1>
        <p>{company.address}</p>
    </li>
}

export default CompanyListItem;