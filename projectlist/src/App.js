import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Tasklist from "./components/tasklist";
import { Route,Switch } from 'react-router-dom'
import IndividualTask from "./components/IndividualTask";


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
      <Switch>
      <Route path="/:taskID" render={props=>  
           <IndividualTask {...props} list={this.state.taskList}/>}/>
           <Route exact path="/" render={props=>  
           <Tasklist {...props} list={this.state.taskList}/>}/>
           </Switch>
      </div>
    );
  }
}

export default App;
