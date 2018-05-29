import React from 'react';
import CompanyListItem from "./company-list-item";

const CompanyList = ({companies}) => {
    const companiesList = companies.map(company => {
        return <CompanyListItem company={company} key={company.id}/>
    })

    return <ul className="company-list">
        {companiesList}
    </ul>
}

export default CompanyList;