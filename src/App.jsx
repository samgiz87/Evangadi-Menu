import React, { Component } from 'react'
import Header from './components/Header/Header'
import "./index.css";
import "./App.css";
import Foodmenu from './components/FoodMenu/FoodMenu';

export default class App extends Component {
  render() {
    return (
      <div className="all-container">
        <Header/>
        <Foodmenu/>
      </div>
    )
  }
}




