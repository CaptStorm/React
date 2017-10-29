import React from 'react';
import ReactDOM from 'react-dom';


class Layout extends React.Component {

    render() {
        const musician = "Amadeus Mozart";
        return (
            <div>
                <h2> {musician} was a great composer </h2>
            </div>
            );
    }
}

const app = document.getElementById('app');
ReactDOM.render( < Layout / > , document.getElementById('root'));
