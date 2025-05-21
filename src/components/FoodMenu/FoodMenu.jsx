import React, { Component } from 'react'
import FoodItem from '../FoodItem/FoodItem'
import "./Foodmenu.css"
import menu from '../../commonResource/data'

export default class Foodmenu extends Component {
  render() {
    return (
      <div className="foods-container">
        {menu.map((singleFood,)=>{
           
            return(
                <FoodItem
                {...singleFood}
                />
            )
        })}
      </div>
    )
  }
}
