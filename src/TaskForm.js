import React, {Component} from 'react'

class TaskForm extends Component {

    constructor() {
        super()
        this.state = {
            text: '',
            category: ''
        }
    }

    render(){
        return(
            <form onSubmit={event => this.props.handleSubmit(event, this.state)} className="new-task-form">
                <input onChange={(event) => this.setState({text: event.target.value})}type="text" placeholder="New task details" value={this.state.text}/>
                <select onChange={(event) => this.setState({category: event.target.value})}>
                    <option disabled selected>Category</option>
                    <option>Code</option>
                    <option>Food</option>
                    <option>Money</option>
                    <option>Misc</option>
                </select>
                <input type="submit" value="Add Task"/>
            </form>
        )
    }

}

export default TaskForm