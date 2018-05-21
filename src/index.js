import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './component/menu';
import FullWidthGrid from './component/grid-layout';

const App = () => (
    <MuiThemeProvider>
        <Menu/>
        <FullWidthGrid/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);