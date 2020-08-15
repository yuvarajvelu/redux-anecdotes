import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notifyMessage } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ''
        props.createAnecdote(content)
        props.notifyMessage(`Anecdote '${content}' added`)
    }
    return(
        <div>
            <h2>create new</h2>
            <form onSubmit = {addAnecdote}>
                <div><input name = 'content' /></div>
                <button type = 'submit'>create</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        createAnecdote: value => {
            dispatch(createAnecdote(value))
        },
        notifyMessage: value => {
            dispatch(notifyMessage(value))
        }
    }
}

export default connect(null,mapDispatchToProps)(AnecdoteForm)