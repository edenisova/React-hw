export function increment(id) {
    return {
      type: 'INCREMENT_LIKES',
      id
    }
  }
  
  export function decrement(id) {
    return {
      type: 'DECREMENT_LIKES',
      id
    }
  }

/*const changeLikes = (isToggled) => {
    return isToggled ? {type: 'INCREMENT_LIKES'} : {type: 'DECREMENT_LIKES'}
}*/

/*export function addPost(text){
    return {type: 'ADD_POST', text}
} */