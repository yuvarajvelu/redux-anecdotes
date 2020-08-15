import axios from 'axios'

const baseUrl = 'http://localhost:3003/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = {content,votes: 0}
    const response = await axios.post(baseUrl,object)
    return response.data
}

const updateVote = async (anecdoteObject) => {
    const response = await axios.put(`${baseUrl}/${anecdoteObject.id}`,anecdoteObject)
    return response.data
}

export default {getAll, createNew, updateVote }