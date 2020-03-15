import ActionStatus from '../actions/status';

export default (state = {}, action) => {
    switch (action.type) {
    case 'START_GAME':
        if (action.status === ActionStatus.SUCCESS) {
            return {
                ...state,
                board: action.payload ? action.payload.board : [[]]
            };
        }
        return state;
    default:
        return state;
    }
};