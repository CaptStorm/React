import React from 'react';
import ReactDOM from 'react-dom';


class Layout extends React.Component {

    render() {
        return (
        <div>
            <h2> Vivaldi was a great composer </h2>
        </div>
           );
    }
}
const app = document.getElementById('app');
ReactDOM.render( < Layout / > , document.getElementById('root'));
