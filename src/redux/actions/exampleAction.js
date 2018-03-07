/**
 * Your redux actions go here, there is no middleware enabled by default so you may want to use Thunk or Sagas in order to dispatch asyncronous actions
 */

 const TYPES ={
     EXAMPLE_ACTION: 'EXAMPLE_ACTION'
 }

 export function exampleAction(dispatch) {
     return dispatch({type: TYPES.EXAMPLE_ACTION, payload: {}});
 }