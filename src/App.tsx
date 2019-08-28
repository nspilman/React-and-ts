import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

import TodoWindow from "./components/TodoWindow"
import Header from "./components/Header"
import SearchWrapper from "./components/SearchWrapper"
import Sidebar from './components/Sidebar';
import { todo } from "./interfaces/todos"
import { render } from 'enzyme';


type AppState = {
  todos: todo[],
  loaded:boolean,
  keyword:string
}

export class App extends Component<{}, AppState> {

  async getTodos() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const json = await resp.json();  
    this.setState({todos:json}) 
  }

  bubbleUpSearchString = (e: React.FormEvent<HTMLInputElement>) => {
    const searchstring: string = e.currentTarget.value;
    this.setState({keyword:searchstring})
    };

    filteredTodos = () : todo[] => {
      return this.state.todos.filter(todo => todo.title.includes(this.state.keyword.toLowerCase()))
    }

  componentWillMount(){
    this.setState({
      todos:[],
      loaded:false,
      keyword:''
    })
  }

  componentDidMount(){
    this.getTodos()
    this.setState({loaded:true})
  }

render(){
  const menuItems : string[] = ['Passing','In','Strings']

  return (
    <div className="App" style={{backgroundColor:"#A0D1E8", height:"100vh", padding:"2em"}}>
    <div className = "row">
      <div className = "col-sm-3">
        <Sidebar menuItems={menuItems}/>    
      </div>
    <div className = "col-sm-9">
      <div className = "row">
        <SearchWrapper bubbleUpSearchString={this.bubbleUpSearchString}/>
      </div>
      <div className = "row">
      <TodoWindow todos = {this.filteredTodos()} />
      </div>
    </div>
    </div>
    </div>
  );
}
}

export default App;
