import React, { Component } from "react";
import { connect } from "react-redux";
import * as toDoAction from "../redux/actions/toDoActions";
import { bindActionCreators } from "redux";

class TaskClass extends Component {
  constructor(props) {
    super(props);

    this.handleAddTask = this.handleAddTask.bind(this);
  }
  componentDidMount() {
    // this.props.createTask({ taskName: "Learn React", isCompleted: true });
  }

  handleAddTask = () => {
    this.props.createTask({ taskName: "Learn React", isCompleted: true });
  };
  render() {
    return (
      <>
        <h1>Task Class component</h1>
        <button onClick={this.handleAddTask}> Add Task</button>
        {this.props.toDoList.map((item) => (
          <p>
            {item.taskName}, {item.isCompleted ? "true" : "false"}
          </p>
        ))}
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    toDoList: state.task,
  };
}

// const mapDispatchToProps = {
//   createTask: toDoAction.createTask,
// };

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: bindActionCreators(toDoAction.createTask, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskClass);
