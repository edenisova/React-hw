/*export function increment() {
    return {
      type: 'INCREMENT_LIKES'
    }
  }
  
  export function decrement() {
    return {
      type: 'DECREMENT_LIKES'
    }
  }*/

const changeLikes = (isToggled) => {
    return isToggled ? {type: 'INCREMENT_LIKES'} : {type: 'DECREMENT_LIKES'}
}