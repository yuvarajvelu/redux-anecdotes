import React from 'react'
import { increaseVote } from '../reducers/anecdoteReducer'
import { notifyMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const Anecdote = ({anecdote, handleClick}) => {
    return (
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}
const AnecdoteList = (props) => {
    
    const byVotes = (a,b) => b.votes - a.votes 
    const vote = (id) => {
        const anecdoteToUpdate = props.anecdotes.find(a => a.id === id)
        const updatedAnecdote = {...anecdoteToUpdate,votes: anecdoteToUpdate.votes + 1}
        props.increaseVote(updatedAnecdote)
        props.notifyMessage(`You voted ${updatedAnecdote.content}`)
    }
    return(
        <div>
            {props.anecdotes.sort(byVotes).map(anecdote =>
                <Anecdote key = {anecdote.id} anecdote = {anecdote} handleClick = {() => vote(anecdote.id)}/>
            )}
        </div>
    )
}
const mapStateToProps = (state) => {
    if(state.filterText === '') {
        return {
            anecdotes: state.anecdotes
        }
    } else {
        return {
            anecdotes: state.anecdotes.filter(anecdote => anecdote.content.search(state.filterText)!== -1)
        }
    }
}
const mapDispatchToProps = {
    increaseVote,
    notifyMessage
}
const ConnectedAnecdote = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdote