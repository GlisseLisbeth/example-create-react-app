import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar';
import ProductForm from './components/ProductForm.jsx';

import Dialogo from './components/Dialogo';

var arrayProductos = [
  {nombre: 'computadora', precio: '3000'},
  {nombre: 'latop', precio: '2500'},
  {nombre: 'celular', precio: '800'}
];

class App extends Component {
  constructor(props){
    super(props);
    console.log('constructor');
    this.state = {
      name: ''
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(ev) {
    var nombre = ev.target.value;

    this.setState({
      name: nombre
    });
  }

  componentDidMount() {
    console.log('component did mount!');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <ProductForm
          productos={arrayProductos}
        />
        <br/>
        Nombre: <input type="text" placeholder={"Ingresar nombre ..."} onChange={this.onChangeValue} />
        <br />
        <br />
        <br />
        <label style={{ textAlign: 'center', color: 'green' }}>{this.state.name}</label>

        <Dialogo />
      </div>
    );
  }
}

export default App;
