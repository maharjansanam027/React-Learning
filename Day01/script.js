
const root = document.getElementById('root');


// At the end React is also object 
// const React = {
//     createElement: function(tag,styles,children){
//         const element = document.createElement(tag);

//         if(typeof children === 'object'){
//             for (const val of children) {
//                 element.append(val);
//             }
//         }
//         else{
//             element.innerHTML = children;
//         }
//         for(let key in styles){
//             element.style[key] = styles[key];
//         }


//         return element;
//     }
// }

// const h1 = React.createElement('h1',{fontSize:"30px",backgroundColor:"blue"},"hello this is heading 1");
// const h2 = React.createElement('h2',{fontSize:"20px",backgroundColor:"gray"},"hello this is heading 2");
// const li1 = React.createElement('li',{},"HTML");
// const li2 = React.createElement('li',{},"CSS");
// const li3 = React.createElement('li',{},"JS");
// const ul = React.createElement('ul',{fontSize:"20px",backgroundColor:"gray",color:"green"},[li1,li2,li3]);

// const h1 = document.createElement('h1');
// h1.innerHTML = "this is heading first";
// h1.style.fontSize = '30px';
// h1.style.backgroundColor = 'blue';


// const h2 = document.createElement('h2');
// h2.innerHTML = "this is heading second";
// h2.style.fontSize = '20px';
// h2.style.backgroundColor = 'gray';


//how i want to create ul tag 
// li  HTML
// li   CSS
// li   JS



// i want to give to this reactDom for render

// ReactDom is also object so it make the developer life easy because react and reactdom we have to not write
// At the end we have to not write full js code. 
// const ReactDOM = {
//     render:function(element,root){
//         root.append(element);
//     }
// }

// dont want to see js code in my file 

// ReactDOM.render(h1,root);
// ReactDOM.render(h2,root);
// ReactDOM.render(ul,root);



// root.append(h1);
// root.append(h2);



