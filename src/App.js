import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import LoginForm from './components/forms/LoginForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { user:{}, };
  }
  
  callAPI() {
    fetch("http://localhost:8000/current")
        .then(response => response.json())
        .then(user => this.setState({ user }))
        .catch(err => err);
  }


  componentDidMount() {
    this.callAPI();
  }
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <Dashboard />
            <img src={logo} className="App-logo" alt="logo" />
            <LoginForm/>
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
