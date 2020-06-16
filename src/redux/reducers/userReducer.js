import { ActionTypes } from "../../utils/constants";

const initialState = {
    username: "",
    userId: 0,
};


export default function userReducer(state = initialState, action) {
    // console.log('%c userReducer', 'color: blue', state, action);
    switch (action.type) {
        case ActionTypes.RESET:
            return initialState;
        default:
            return state;
    }
}