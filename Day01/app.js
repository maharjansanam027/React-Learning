

const element = React.createElement('h1',{},"Hello coder army");


// this is allowed in react 17 but in 18 it is not allowed
// because in this root is not control of react so because of this 
// eg js is single threaded language in netflex in one time event clicked then it will 
// execute all code means everything then another but in react 18 react is taking control of root
// then whenever event occured it will stop another event then continue latest one.
// ReactDOM.render(element,document.getElementById('root'));




const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));

ReactRoot.render(element);