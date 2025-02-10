
const root = document.getElementById('root');

const React = {
    createElement: function(tag,styles,children){
        const element = document.createElement(tag);
        element.innerHTML = children;

        for(let key in styles){
            element.style[key] = styles[key];
        }


        return element;
    }
}

const h1 = React.createElement('h1',{fontSize:"30px",backgroundColor:"blue"},"hello this is heading 1");
const h2 = React.createElement('h2',{fontSize:"20px",backgroundColor:"gray"},"hello this is heading 2");

// const h1 = document.createElement('h1');
// h1.innerHTML = "this is heading first";
// h1.style.fontSize = '30px';
// h1.style.backgroundColor = 'blue';


// const h2 = document.createElement('h2');
// h2.innerHTML = "this is heading second";
// h2.style.fontSize = '20px';
// h2.style.backgroundColor = 'gray';


// want to create ul tag 
// li  HTML
// li   CSS
// li   JS



// i want to give to this reactDom for render
const ReactDOM = {
    render:function(element,root){
        root.append(element);
    }
}

// dont want to see js code in my file 

ReactDOM.render(h1,root);
ReactDOM.render(h2,root);



// root.append(h1);
// root.append(h2);

