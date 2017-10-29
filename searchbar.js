import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



//building search box 
class Search extends React.Component {
    render() {
        return (
            //search box css
            < div className = "search" >
            < div className = "search-bar" >
			</div>
            < p > You are about to search
            for < input placeholder = "Search" / > < /p> < div className = "results" >
            < div className = "in-stock" >
            < h2 className = "bookTitle" > Anna Karenina < /h2> < h3 className = "author" > Lev Tolstoy < /h3> < p className = "description" > Anna Karenina is the tragic story of Countess Anna Karenina, a married noblewoman and socialite, and her affair with the affluent Count Vronsky.The story starts when she arrives in the midst of a family broken up by her brother 's unbridled womanizing—something that prefigures her own later situation, though she would experience less tolerance by others</p> < p className = "price" > 19.93 < /p> 
          				< /div> 
          			< /div> 
         	 < /div> 
        )
    }
}

ReactDOM.render( < Search / > , document.getElementById('root'));
