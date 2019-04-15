import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = "e11fc97c6507401087d9544f2117c0ed";

class App extends Component {
  componentDidMount(){
    // Split our Xur code into it's own method. For technical reasons, it's needed for `await`
    // to work, but is also handy if we want to fetch xur at another time after the page loads
    this.getXur();
    console.log("Josh is a poo head.")
  }

  async getXur() {
    // fetch() is how we make API calls in browser now
    // `await` is an instruction to tell the JS to 'wait' until the API call has finished before
    // continuing on.
    const response = await fetch(
      "https://www.bungie.net/Platform/Destiny2/Vendors/?components=400,402,401" ,
      { headers: { "X-API-Key": API_KEY } }  //config needed to pass through the API key
    );

    // Then we need to convert the response to actual JSON data that we can work with
    const data = await response.json();

    // and then log it to the console
    console.log(data);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
