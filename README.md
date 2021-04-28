# Getting Started with Create React App

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

# States in React:-
Stat is an object of comoponent that can be accessed anywhere inside the component. From the state we can get data, change it and render it on the DOM. The state basically manages all the data present inside the component. State is also used to add and update a value given by a user.

## Creating State in React:
To create a state inside the class component you have to use constructor method and super method inside of which you will create an object

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: "Shoaib Tahie",
            email: shoaibtahir97@gmail.com
        }
    }
}
