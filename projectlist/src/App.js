import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Tasklist from "./components/tasklist";
import { Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    };
  }
  componentDidMount = () => {
    this.updateTaskList();
  };
  updateTaskList = () => {
    axios
      .get("http://localhost:9001/projects")
      .then(response => {
        this.setState({
          taskList: response.data
        });
      })
      .catch(function(error) {
        // handle error
      });
  };
  

  render() {
    return (
      <div className="App">
           <Route exact path="/" render={props=>  
           <Tasklist {...props} list={this.state.taskList}/>}/>
      </div>
    );
  }
}

export default App;
