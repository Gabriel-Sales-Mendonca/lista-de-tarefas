import React, { Component } from 'react'
// form
import { FaPlus } from 'react-icons/fa'
// tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './Main.css'

export default class Main extends Component {
    state = {
        newTask: '',
        tasks: []
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { tasks } = this.state
        let { newTask } = this.state

        newTask = newTask.trim()

        if(tasks.indexOf(newTask) !== -1) return

        const newTasks = [ ...tasks ]

        this.setState({
            tasks: [ ...newTasks, newTask ],
            newTask: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            newTask: e.target.value,
        })
    }

    handleEdit = (e, index) => {
        const { tasks } = this.state

        const taskEdit = [ ...tasks ]

    }

    handleDelete = (e, index) => {
        const { tasks } = this.state
        
        const taskDelete = [ ...tasks ]
        taskDelete.splice(index, 1)

        this.setState({
            tasks: [ ...taskDelete ]
        })
    }

    render() {
        const {newTask, tasks} = this.state

        return (
            <div className='main'>
                <h1>Lista de Tarefas</h1>

                <form action='#' className='form' onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' value={newTask} />
                    <button type='submit'>
                        <FaPlus />
                    </button>
                </form>

                <ul className='tasks'>
                    {tasks.map((task, index) => (
                        <li key={task}>
                            {task}
                            <div>
                                <FaEdit onClick={ (e) => this.handleEdit(e, index)} className='edit'/>
                                <FaWindowClose onClick={ (e) => this.handleDelete(e, index)} className='delete'/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}