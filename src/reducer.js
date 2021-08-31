
const initialState = {
    likes_1: localStorage.getItem('likes_1'),
    likes_2: localStorage.getItem('likes_2'),
    likes_3: localStorage.getItem('likes_3'),
    likes_4: localStorage.getItem('likes_4')
}

const reducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type){
        case 'INCREMENT_LIKES':
            ++newState['likes_'+action.id];
            localStorage.setItem('likes_' + action.id, newState['likes_'+action.id]);
            return newState;
        case 'DECREMENT_LIKES':
            --newState['likes_'+action.id];
            localStorage.setItem('likes_' + action.id, newState['likes_'+action.id]);
            return newState;
    }
    return newState;
  }

  export default reducer