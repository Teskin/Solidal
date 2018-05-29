import React from 'react';
import {connect} from 'react-redux';
import {fetchCompanies} from '../actions';
import CompanyList from "./company-list";


class MainContainer extends React.Component {
    // The component will be rendered only once the component has loaded all the data necessary (here in this function, once). In
    // this particular case, we are going to fetch data from the reducer which will call an action.
    componentDidMount() {
        this.props.fetchCompanies();
    }

    render() {
        return (<div className="grid-container">
            <header className="header">
                <div className="grid-header-container">
                    <div className="title-container">
                        <h1 id="app-title">Solidal</h1>
                    </div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Companies</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <aside className="aside">
                2
            </aside>
            <main className="main">3</main>
            <section className="section">
                <CompanyList companies={this.props.companies}/>
            </section>
            <footer className="footer">5</footer>
        </div>);
    }
}

function mapStateToProps(state) {
    return {companies: state.companies}
}

export default connect(mapStateToProps, {fetchCompanies})(MainContainer);