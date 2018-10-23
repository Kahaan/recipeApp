import React, { Component } from 'react';
import './App.css';
import Form from './form'
import Recipes from './recipes'

const API_KEY = "985eb771f35d7f3a000f1dfd938e3111"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      recipes: []
    }
    this.getRecipe = this.getRecipe.bind(this)
  }

  async getRecipe(e){
    e.preventDefault()
    const recipeName = e.target.elements.recipeName.value
    const api_call = await fetch(`http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`)
    const data = await api_call.json()
    this.setState({recipes:data.recipes})
    console.log(this.state.recipes)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
