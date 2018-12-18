import React, {Component} from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
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
            <ButtonToolbar>
                <Button bsStyle="primary" bsSize="large">
                    Large button
                </Button>
                <Button bsSize="large">Large button</Button>
            </ButtonToolbar>
        </header>
      </div>
    );
  }
}

export default App;
