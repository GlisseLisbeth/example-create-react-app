import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilteredProductTable from './components/FilteredProductTable.jsx';

var PRODUCTS = [
  { category: 'Sporting Goods', price: 'S/.49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: 'S/.9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: 'S/.29.99', stocked: true, name: 'Basketball' },
  { category: 'Sporting Goods', price: 'S/.4999.99', stocked: true, name: 'TV' },
  { category: 'Sporting Goods', price: 'S/.399.99', stocked: true, name: 'iPhone' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <FilteredProductTable products={PRODUCTS}/>
      </div>
    );
  }
}

export default App;
