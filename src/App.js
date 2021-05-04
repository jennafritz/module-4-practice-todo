import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import TaskContainer from './TaskContainer'
import CategoryButtons from './CategoryButtons'

// let taskList = [
//   {
//     text: 'Buy rice',
//     category: 'Food'
//   },
//   {
//     text: 'Save a tenner',
//     category: 'Money'
//   },
//   {
//     text: 'Build a todo app',
//     category: 'Code'
//   },
//   {
//     text: 'Build todo API',
//     category: 'Code'
//   },
//   {
//     text: 'Get an ISA',
//     category: 'Money'
//   },
//   {
//     text: 'Cook rice',
//     category: 'Food'
//   },
//   {
//     text: 'Tidy house',
//     category: 'Misc'
//   }
// ]

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    filteredTasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    selectedCategory: 'All'
  }

  changeCategory = (event) => {
    event.persist()
    // console.log(event.target)
    if (this.state.selectedCategory !== "All") {
      let filteredArray = this.state.tasks.filter(task => task.category === event.target.name)
      this.setState({
        filteredTasks: filteredArray,
        selectedCategory: event.target.name
      })
    } else {
      this.setState({
        filteredTasks: this.state.tasks,
        selectedCategory: event.target.name
      })
    }
  }

  handleSubmit = (event, newTask) => {
    event.preventDefault()
    let newStateArray = [...this.state.tasks, newTask]
    if(newTask.category === this.state.selectedCategory){
      let newFilteredArray = [...this.state.filteredTasks, newTask]
      this.setState({
        tasks: newStateArray,
        filteredTasks: newFilteredArray
      })
    } else {
      this.setState({
        tasks: newStateArray,
        filteredTasks: newStateArray
      })
    }
    event.target.reset()
  }

  handleDelete = (deletedTask) => {
    let keptStateArray = this.state.tasks.filter(task => task.text !== deletedTask.text)
    // console.log(keptStateArray)
    if(deletedTask.category === this.state.selectedCategory){
      let keptFilteredArray = this.state.filteredTasks.filter(task => task.text !== deletedTask.text)
      this.setState({
        tasks: keptStateArray,
        filteredTasks: keptFilteredArray
      // console.log(keptFilteredArray)
      })
    } else {
        this.setState({
          tasks: keptStateArray,
          filteredTasks: keptStateArray
        })
    }
  }

  render() {
    // console.log(this.state.tasks)
    // console.log(this.state.filteredTasks)
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryButtons selectedCategory={this.state.selectedCategory} changeCategory={this.changeCategory} categories={CATEGORIES}/>
        <TaskContainer handleDelete={this.handleDelete} handleSubmit={this.handleSubmit} tasks={this.state.selectedCategory === 'All' ? this.state.tasks : this.state.filteredTasks}/>
      </div>
    );
  }
}


export default App;
