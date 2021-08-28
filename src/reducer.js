const initialState = {
    likes: localStorage.getItem('likes_' + props.itemId),
  }

export default  reducer(state = initialState, action) => {
    const newState = {...state}
    if (action.type === 'INCREMENT_LIKES') {
        newState.likes++;
      }
    
      if (action.type === 'DECREMENT_LIKES') {
        newState.likes--;
      }
    
      return newState;
  }