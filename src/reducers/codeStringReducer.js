const codeStringReducer = (state = "", action) => {
    switch (action.type) {
        case 'CHANGE_CODESTRING':
            return action.payload
        default:
            return state
    }
}

export default codeStringReducer