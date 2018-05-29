import React from 'react';
import _ from 'lodash';
import CompanyListItem from "./company-list-item";

const CompanyList = ({companies}) => {
    // We are using Lodash .map because the props we are using is actually an object instead a proper list as this content is coming from the reducers
    // and a global state, otherwise it wouldn't work at all!
    const companiesList = _.map(companies, company => {
        return <CompanyListItem company={company} key={company.id}/>
    })

    return <ul className="company-list">
        {companiesList}
    </ul>
}

export default CompanyList;