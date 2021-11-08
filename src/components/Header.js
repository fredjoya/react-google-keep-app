import React from 'react';
import ReactDOM from 'react-dom';
import Paper from '@mui/material/Paper';

function Header() {
    return (
        <Paper style={{padding: "5px", display: "flex" }} square elevation={3}>
            <img style={{width: "50px"}} 
            src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"></img>
            <h1 style={{margin: "0" }}>React App</h1>
        </Paper>
    );
}

export default Header