# Getting Started with Create React App

<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Using inline css in React:
If you want to use inline css inside a HTML element then you have to use curly brackets instead og inverted commas. 
Inside the HTML element type <h1 style = {{color: 'red', fontSize: 18}}></h1>
Note that instead of using - to seperate CSS properties use camelCase to define properties. If you are using any name property then use inverted comma and if using number property then type it directly. 

## Using Shortcut Keys in React:

While using HTML elements in React components you will notice that shortcut keys are not working, to make it work change the extension of the component from 'App.js' to 'App.jsx'

## Closing a Self Closing tag is must in React
If you are using any self closing tag like img, br etc you have to close the tag with a forward slash. In valnilla HTML it was not necessary to put a forward slash at the end, but in React you have to write a forward slash.

## Installing dependencies to React App using npm install
Suppose you accidently deleted your node modules folder where all of your dependencies were saved. When the folder is deleted you cannot run your installed dependencies. OR you have cloned a project from github and you are running the app, and the app is not running because the packages are not installed in your computer.
To solve this problem you have to install the dependencies again.
If you run npm install command on the terminal it will again install all the dependencies that were present inside the package.json file.

## Deploying React App on Firebase
1).Run the command on terminal 'npm run build'. After this command a folder is created by the name of build
2). Now you can deploy the app on firebase or any other server.

## Creating Multiple Components in React and exporting and importing them 
You can create multiple components inside a single file and export them like this
export {
    Header, 
    Logo,
};
Now if you want to import the component inside another one you have to use curly brackets and import both the comoponents inside of it like this:
import {Header, Logo} from './components/Header';

## Importing Images in Components and using in HTML tags
Download the image that you want to use import it same as that of other files.
Now if you want to use it in your image tag you have to place the name in src surrounded by curly brackets not quotes

import image from './images/picture.jpg'; // importing image form src

<img src={image} />  //using image in img tag

## Creating Functions in React Components
You can create functions inside React component but not inside return. The function is created without writing the keyword "function"

## Normal function VS Arrow function
A normal function cannot get the values of its parent comopnent whereas an arrow function can get the values of its parent comopnent.

## Function calling in React:-
You can call a normal function inside an element using "this" keyword followed by function name 

# States in React:-
In JS we used document.getElementById to get data from DOM to use it in JS, but in React you use State to save the value. State is an object created in comoponent which is accessed anywhere inside the component. From the state we can get data, change it and render it on the DOM. The state basically manages all the data present inside the component. State is also used to add and update a value given by a user.

## Creating State in React:
To create a state inside the class component you have to use constructor method and super method inside of it, super is used to get value from parent component to child component. Then you will create state inside constructor, state is an object by the name of this.state

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: "Shoaib Tahir",
            email: shoaibtahir97@gmail.com
        }
    }
}

## Getting the values of State in React
In order to get the value present in state and use it we are going to use curly brackets and type this:
<p>{this.state.name} </p>  
name property is obtained

## Setting the values of State(changing the state values)
In order to set state we will create a button and onClick or onChange event which will call a function. Inside the function we will use a method this.setState() which takes an object, inside the object whatever property of object we give, it will find that property in state and updates the value.
Whenever state is changed or updated the render function will be rendered again without reloading the page 

## Setting State using target.value()
If we want that whatever value we type in our text feild it should go inside the setState and update the state with new value. So for that we will create a text feild and inside we use onChange() event. You can change the state on realtime i.e when the user types the value the state is changed on the DOM directly, we will do this by using event.target.value to get the value from input. You can get any attribute present in an element like class and id 

onChange ={(e)=>console.log(e.target.value)}

2). onChange = {(e)=> this.setState({e.target.value})} //The state will be changed in the DOM directly

3). onChange={(e)=> this.setState({value: e.target.value})} //This code will see that if value property is present inside setState function then update it with the input and if value property is not present then it will add the value inside the object

4). onChange = {(e)=> this.handleChange(e)}


Vanilla Javascript
//If you want to get data from an object when a user types his name or email then you can use object name followed by square brackets and inside of it add the variable in which user entered the data. Instead of typing val you can put property name in inverted comma to get the property value

let obj = {
    name: "Shoaib",
    email: "shoaibtahir97@gmail.com"
}

let val = prompt ("Enter Property");
console.log(obj[val]);

# Props in React
If we want to transfer the data from one component to another component we use props. A prop is just like a HTML attribute whose name could be of your choice. Suppose you want to transfer prop from <App/> to <Header/> so inside the App component where you have called the Header component inside the Header you will type the prop. Now if you want to get the prop inside the Header you will use this.props. This is an example of hardcoded data
You can also send real data using name = "this.state.name"

## Sending props from child Component to Parent Component
Create an arrow function with a parameter of prop or any name in parent component then pass the function inside the <Header/> as props. Inside the Header component create a button and inside button create an onclick event and pass the props like this
onCLick={()=> this.props.get_props("saylani")}
    Now inside the function that you created in App you also passed a parameter now in that parameter you will recieve your data from child, you can console.log the data or maniplu
=======
This project is created to learn key concepts of react in detail.
>>>>>>> 96d17c912cdc41881245fc9d7e56a86c14aa7920
