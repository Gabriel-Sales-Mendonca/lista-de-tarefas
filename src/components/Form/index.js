import React from 'react'
import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'

import './Form.css'

export default function Form({ handleSubmit, handleChange, newTask }) {
    return (
        <form action='#' className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' value={newTask} placeholder='Descreva aqui um nova tarefa' />
            <button type='submit'>
                <FaPlus />
            </button>
        </form>
    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    newTask: PropTypes.string.isRequired
}