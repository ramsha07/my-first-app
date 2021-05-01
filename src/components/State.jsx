import React from 'react';

class State extends React.Component {
    constructor() {
        super ()
        this.state = {
            name: "Shoaib",
            email: "shoaibtahir97@gmail.com",
            age: 23,
        }
    }

    setName =() =>{
        this.setState({
            name: "Ramsha"
        })
    }

    getName= () => {
        console.log(this.state.name);
    }
render () {
    return(
        <div>
            <h1>Hello my name is {this.state.name}</h1>
            <input type="text" name="" placeholder="Enter your name" id=""/>
            <button onClick={this.setName}>Change Name </button>
            <button onClick={this.getName}>Get Name</button>
        </div>
    )
}
}
export default State