import React, { Component } from "react";
import axios from "axios";

class IndividualTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {}
    };
  }

  IndividualTask = () => {
    axios
      .get(`http://localhost:9001/projects/${this.props.match.params.taskID}`)
      .then(response => {
        
        this.setState({
          task: response.data
        });
      })
      .catch(function(error) {
        // handle error
      });
  };
  componentDidMount = () => {
    this.IndividualTask();
  };
  render() {
    return (
      <div>
        {this.state.task ? (
          <div>
            <div>{this.state.task.name}</div>
            <div>{this.state.task.description}</div>
            <div>{this.state.task.completed}</div>
            <div>
              Tasks:
              {this.state.task.actions !== undefined
                ? this.state.task.actions.map((e, i) => {
                    return <div key={i}>{e.description}</div>;
                  })
                : ""}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default IndividualTask;
