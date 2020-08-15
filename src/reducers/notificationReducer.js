
const notificationReducer = (state = '', action) => {
    switch(action.type) {
        case 'NOTIFICATION':
            return action.message
        case 'DISABLE':
            return ''
        default:
            return state
    }
}

export const notifyMessage = (message) => {
    return {
        type: 'NOTIFICATION',
        message
    }
}
export const disableNotification = (message) => {
    return {
        type: 'DISABLE'
    }
}

export default notificationReducer