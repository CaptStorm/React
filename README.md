ComponentWillMount
gets executed before rendering on server and client's side

ComponentDidMount is executed after first render only at the clent's side
Ajax and DOM or state changes occure and it gets integrated with setTimeout and setInterval

ComponentWillReceive props is invoked as soon as propes are updated but before another render is called. That gets trigggered from setNewNumber

ShouldComponentUpdate should return a true or false value

ComponentWillUpdate is called before rendering

ComponenetWillUnmount gets called after unmounting from dom only at main.js because that is where the hub is 




Higher order components that are added to existing components functions must receive and send out data
