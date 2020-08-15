const filterReducer = (state = '',action) => {
    switch(action.type) {
        case 'FILTER': {
            return action.filterText
        }
        default:
            return state
    }
}

export const filterChange = (filterText) => {
    return {
        type: 'FILTER',
        filterText
    }
}

export default filterReducer