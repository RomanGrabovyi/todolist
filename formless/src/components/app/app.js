import React, { Component } from 'react';

import TodoList from '../toDo';
import toDoData from '../toDoData';

import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: toDoData
    }
  }

  handleChange = (id) => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState(state => {
      let {todoItems} = state;
      todoItems[index].completed = true;
      return todoItems;
    })
  }

  render() {
    const {todoItems} = this.state;
    const activeItems = todoItems.filter(item => item.completed === false);
    const completeItems = todoItems.filter(item => item.completed === true);
    
    const finalItems = [...activeItems, ...completeItems].map(item => {
      // console.log(finalItems)

      return(
        <TodoList
        key={item.id}
        description={item.description}
        completed={item.completed}
        handleChange={() => {this.handleChange(item.id)}}
        />

      )  
    })
    
    return (
      <div className="app">
          {finalItems}
      </div>
    );
  }
  
}

export default App;
