//build a component

class HelloMessage extends React.Component {
render () {
  return(
    <div> 
      <h1> Hello {this.prop.name} </h1>
    </div>
);
}
}

ReactDOM.render(
<HelloMessage name = "John Wayne" />, mountNode);
