const symbolTypeReducer = (state = "", action) => {
    switch (action.type) {
        case 'CHANGE_SYMBOLTYPE':
            return action.payload
        default:
            return state
    }
}

export default symbolTypeReducer