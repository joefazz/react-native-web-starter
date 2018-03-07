import initialState from '../initialState';

const INITIAL_STATE = initialState.example;

export default function(state = INITIAL_STATE, action = {}) {
    switch(action) {
        default:
            return state;
    }
}