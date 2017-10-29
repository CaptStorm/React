import React from 'react';
import ReactDOM from 'react-dom';


class Layout extends React.Component {
    constructor() {
        super();
        this.name = "Jules Verne";
        this.country = "France";
    }

    render() {
        return (
            < div >
                <h1> {this.name} is from {this.country} </h1>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render( < Layout / > , document.getElementById('root'));
