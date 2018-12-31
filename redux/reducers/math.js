const defaultState = {
  list:[0]
};
 

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADDCOUNTER':
      return Object.assign({}, state, { 
        list:action.list
      });
    case 'DECRAMENTCOUNTER':
      return Object.assign({}, state, { 
        list:action.list
      });
    case 'INCRAMENTCOUNTER':
      return Object.assign({}, state, { 
        list:action.list
      });
    case 'REMOVECOUNTER':
      return Object.assign({}, state, { 
        list:action.list
      });

    default:
      return state;
  }
}