import React from 'react';
import ReactDOM from 'react-dom';


class Layout extends React.Component {

    getVal(val) {
        return "William Turner" + " is from " + val;
    }

    render() {
        return (
            <h1> {this.getVal("Tortuga")}! </h1>

        );
    }
}

const app = document.getElementById('app');
ReactDOM.render( < Layout / > , document.getElementById('root'));
