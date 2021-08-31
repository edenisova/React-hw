import reducer from './reducer'
import { createStore } from 'redux'

let store = createStore(reducer)

//export default createStore(reducer, initialState)

console.log(store.getState())

export default store;