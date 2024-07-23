import React, { useState } from 'react'
import './Todo.css'
import AddTask from '../AddTask';
import ListTask from '../ListTask';
function Todo() {
    const [tasks, setTasks] = useState([

    ])
    const addtask = (title) => {
        const newTask = [...tasks, { title }]
        setTasks(newTask)

    }
    const removeTask = (index) => {
        const newTask = [...tasks]
        newTask.splice(index, 1)
        setTasks(newTask)
    }


    return (
        <>
            <div className='todocontainer'>
                <div className='header'>TODO APP</div>
                <div className='addtask'><AddTask addtask={addtask} /></div>
                <div className='tasks'>
                    {tasks.map((task, index) => (
                        <ListTask task={task} removeTask={removeTask} index={index} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Todo;