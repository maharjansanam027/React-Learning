

const element = React.createElement("h1",{id:"first",className:"heading",style:{backgroundColor:"red",color:"white"}},"Hello Coder Army");
const element1 = React.createElement("h2",{id:"second",className:"heading",style:{backgroundColor:"red",color:"white"}},"kaisa ho sab");


// if we want to render more element then we can put in one container. like this then we can render that div
const div1 = React.createElement('div',{},[element,element1]);

const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));

// ReactRoot.render(element);
// ReactRoot.render(element1);


// render like this.
ReactRoot.render(div1);

// if want to render two element


// ReactDOM.render(element,document.getElementById('root'));

