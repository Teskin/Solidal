import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="grid-container" >
                <header className="grid-item-1">1
                    <nav>menu</nav>
                </header>
                <aside className="grid-item-2">2</aside>
                <main className="grid-item-3">3</main>
                <section className="grid-item-4">4</section>
                <footer className="grid-item-5">5</footer>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);