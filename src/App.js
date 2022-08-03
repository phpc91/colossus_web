// import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
// import { PuffLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import TextField from '@mui/material/TextField';
import PlayerTable from './components/PlayerTable';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // "bindar" a função customizada no contexto da classe
    // outra opção é declarar a função como arrow function
    this.searchPlayer = this.searchPlayer.bind(this)
    this.counter = 0

    this.state = {
      player: null,
      playerName: '',
      loading: false,
      error: false,
    }
  } 

  componentDidUpdate() {
  }

  // arrow function seria:
  // const getLeBron = () => { ...código }
  // a vantagem é q arrow function tem um "auto bind" pra n ter q escrever aquela linha 13
  searchPlayer() {
    toast.info('Loading...', {
      toastId: 'search-loading',
      isLoading: true,
      autoClose: false,
    })
    axios.post(
      'http://localhost:9999/player/search',
      { playerName: this.state.playerName },
    ).then((data) => {
        toast.update('search-loading', {
          type: toast.TYPE.INFO,
          autoClose: 1500,
          isLoading: false,
          render: <p>Success!</p>
        })
        this.setState({ player: data.data, loading: false })
      })
      .catch((error) => {
        toast.update('search-loading', {
          type: toast.TYPE.ERROR,
          autoClose: 3000,
          isLoading: false,
          render: <p>{`Deu ruim, sente só: ${error.response.data}`}</p> 
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
          <ToastContainer theme='dark'/>
          <TextField
            autoFocus
            required
            label='Player name'
            value={this.state.playerName}
            onChange={(event) => this.setState({ playerName: event.target.value })}
            onKeyDown={(event) => { if (event.key === 'Enter') this.searchPlayer() }}
          />
          <button className='button' onClick={this.searchPlayer}>Search</button>
          { this.state.player && (
            <PlayerTable rows={this.state.player} />
          )}
        </header>
      </div>
    );
  };
};
