

const element = React.createElement("h1",{id:"first",className:"heading",style:{backgroundColor:"red",color:"white"}},"Hello Coder Army");
const element1 = React.createElement("h2",{id:"second",className:"heading",style:{backgroundColor:"red",color:"white"}},"kaisa ho sab");

const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));

ReactRoot.render(element);
ReactRoot.render(element1);

// ReactDOM.render(element,document.getElementById('root'));