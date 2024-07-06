import React, { Component } from 'react'
// form
import { FaPlus } from 'react-icons/fa'
// tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './Main.css'

export default class Main extends Component {
    state = {
        newTask: '',
        tasks: [],
        index: -1
    }

    componentDidMount() {
        const tasks = JSON.parse(localStorage.getItem('tasks'))

        if(!tasks) return

        this.setState({
            tasks: tasks
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { tasks } = this.state

       if(prevState.tasks === tasks) return

       localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { tasks } = this.state
        let { newTask, index } = this.state

        newTask = newTask.trim()

        if(tasks.indexOf(newTask) !== -1) return

        const newTasks = [ ...tasks ]

        if(index !== -1) {
            newTasks[index] = newTask

            this.setState({
                tasks: [ ...newTasks ],
                newTask: '',
                index: -1
            })

            return
        }

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

        this.setState({
            index: index,
            newTask: tasks[index]
        })

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