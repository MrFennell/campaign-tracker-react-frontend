import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import LoginForm from './components/forms/LoginForm';
import TestForm from './components/forms/TestForm';
import store from './redux/store';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { user:{} };

    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), 
      // we will update local component state and force component to rerender 
      // with new data.

        this.setState({
          user: store.getState().userReducer.user.name
        });
      });
  }
  
  callAPI() {
    // fetch("http://localhost:8000")
    fetch("/")
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
            <LoginForm store={store}/>
            <TestForm/>
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
