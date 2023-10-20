const groupReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_GROUP_INFO':
            return action.payload;
        default:
            return state;
    }
};

export default groupReducer;