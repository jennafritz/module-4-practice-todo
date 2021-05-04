import React from 'react'

const Task = ({task, handleDelete}) => {
    return(
        <div className="task">
            <div className="label">{task.category}</div>
            <div className="text">{task.text}</div>
            <button onClick={() => handleDelete(task)} className="delete">X</button>
        </div>
    )
}

export default Task