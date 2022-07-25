import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
// import { PuffLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // "bindar" a função customizada no contexto da classe
    // outra opção é declarar a função como arrow function
    this.getLeBron = this.getLeBron.bind(this)

    this.state = {
      LeBron: null,
      loading: false,
      error: false,
    }
  } 

  componentDidUpdate() {
  }

  // arrow function seria:
  // const getLeBron = () => { ...código }
  // a vantagem é q arrow function tem um "auto bind" pra n ter q escrever aquela linha 13
  getLeBron() {
    toast.info('Loading...', {
      toastId: 'lebron-loading',
      isLoading: true,
      autoClose: false,
    })
    axios.get('http://localhost:9999/lebron')
      .then((data) => {
        toast.update('lebron-loading', {
          type: toast.TYPE.INFO,
          autoClose: 1500,
          isLoading: false,
          render: <text>Success!</text>
        })
        this.setState({ LeBron: JSON.stringify(data.data), loading: false })
      })
      .catch((error) => {
        toast.update('lebron-loading', {
          type: toast.TYPE.ERROR,
          autoClose: 3000,
          isLoading: false,
          render: <text>{`Deu ruim, sente só: ${error.message}`}</text> 
        })
        this.setState({ loading: false, error: true })
      })
  };

  render() {
    return (
      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
        </style>
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
          <ToastContainer theme='dark'/>
          <button className='button' onClick={this.getLeBron}>Get LeBron</button>
          { this.state.LeBron && <text style={{ marginTop: '20px' }}>{this.state.LeBron}</text> }
        </header>
      </div>
    );
  };
};
