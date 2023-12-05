import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import FoodData from './components/FoodData';
import Search from './components/Search';

class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       search: ""
    }
  }
  
  handleSearch = (info) => {
    this.setState({search: info})
  }

  

  render(){
    return(
      <>
      <h1>Search</h1>
      <Search handleSearch={this.handleSearch}/>

      {
        FoodData.filter((el) => {
          if(this.state.search == ""){
            return el 
          }
          else if(el.name.toLowerCase().includes(this.state.search.toLowerCase())){
            return el 
          }
        }).map((el) => {
          return(
            <div key={el.id}>
              <FoodBox food = {el} />
            </div>
          )
        })
      }

      </>
    )
  }
}

export default App
