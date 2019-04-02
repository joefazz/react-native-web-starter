import initialState from '../initialState';

const INITIAL_STATE = initialState.example;

export default function(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case 'EXAMPLE_ACTION':
            // state.text becomes the action.payload or the current state.text
            return  {text: action.payload || INITIAL_STATE.text};
        default:
            return state
    }
}