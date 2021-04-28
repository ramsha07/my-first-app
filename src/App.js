import './App.css';

function App() {
  let arr = [ {name:"Basit"}, {name: "Ghous"}];
  return (
    <div className="App">
      <ul>
        {arr.map((item, index)=> {
          return (
            <li key ="index"> {item.name} </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
/*
* In this example we have created an array with the elements having objects. 
* If you want to write JS in React then you have to use curly brackets. 
* To get the data from the array we have used .map()function that takes two parameters first is the item and second 
  is the index of the item.
* Now inside the curly brackets if we want to use HTML again we have to write return with parenthesis if you 
want to write code below the line. 
* Next inside the <li> we have called the name of the item inside curly brackets as it is JS. 
* Note we have to write (key = "index") inside the <li> as prop where we have called the array element, 
  if not then result in error.

*/
