import React, {Component} from 'react'
import Task from './Task'
import TaskForm from './TaskForm'

class TaskContainer extends Component {


    render(){
        // console.log(this.props.tasks)
        return(
            <div className="tasks">
                <h5>Tasks</h5>
                <TaskForm handleSubmit={this.props.handleSubmit}/>
                {this.props.tasks.map(task => <Task task={task} handleDelete={this.props.handleDelete}/>)}
            </div>
        )
    }
}

export default TaskContainer