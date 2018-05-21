import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from './component/button';

const App = () => (
    <MuiThemeProvider>
        <Button/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);