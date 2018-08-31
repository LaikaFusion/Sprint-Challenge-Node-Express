import React, { Component } from 'react';

class Tasklist extends Component {
  taskListDisplay = () => {
    return this.props.list.map((e, i) => {
      return (
        <div className="taskRow" key={i}>
          <div className="taskColumn">{e.name}</div>
          <div className="taskColumn">{e.description}</div>
          <div className="taskColumn">{e.complete ? "Done":""}</div>

        </div>
      );
    });
  }
  render() {
    return (
         <div className="taskList">
          <div className="taskRow">
            <div className="taskColumn">Task</div>
            <div className="">Description</div>
            <div className="taskColumn">Complete?</div>
          </div>
          {this.taskListDisplay()}
        </div>
    );
  }
}

export default Tasklist;