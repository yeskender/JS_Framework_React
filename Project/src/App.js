import React, { Component } from 'react';
import './App.css';
import MainMenu from './menu';


import {
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Home from './pages/home';

import ToDoList from './pages/todo'

class App extends Component {
  render() {
    return (
            <Router>
                <div>
                    <Route path="/:id?" component={PageRoute}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/todolist" component={ToDoListRoute}/>
                </div>
            </Router>
    );
  }
}

const ToDoListRoute = () => (
    <div>
        <ToDoList title="todo" />
    </div>
)
const PageRoute = ({match}) => (
    <div>
        <MainMenu activeItem={match.params.id != null ? match.params.id : "home"}/>
    </div>
)

export default App;
