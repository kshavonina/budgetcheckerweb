import React, {Component} from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    handleChange = (event) => {
        this.setState( {request: event.target.value} )
    };

    handleSubmit = (event) => {
        event.preventDefault();
        var request = this.state.request.trim();
        if (!request) {
            return;
        }
        fetch(`/echo?request=${request}`)
            .then(response => {
                return response.text();
            })
            .then(body => {
                alert(body);
            })
    };


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
            <h2>Do you hear an echo?</h2>
        </header>
          <form className="App-intro" onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange}/>
              <input type="submit" value="Echo"/>
          </form>
      </div>
    );
  }
}

export default App;
