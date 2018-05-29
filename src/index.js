import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './App.css';

import CompanyList from './component/company-list';

const API_URL = "http://192.168.202.69:8080/api/"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            companies: []
        };
    }

    componentDidMount() {
        fetch(`${API_URL}companies`).then(result => result.json())
            .then(result => {
                    this.setState({
                        isLoaded: true,
                        companies: result.items
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });

    }

    render() {
        return (
            <div className="grid-container">
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
                    <CompanyList companies={this.state.companies}/>
                </section>
                <footer className="footer">5</footer>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);