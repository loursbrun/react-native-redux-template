export const addCounter = (list) => {
  return {
    type: 'ADDCOUNTER', 
    list: [...list, 10]}};

export const removeCounter = (list,index) => {
  return {type: 'REMOVECOUNTER',list:[
        ...list.slice(0,index),
        ...list.slice(index+1)]}
};

export const incrementCounter = (list,index) => {
  return {type: 'INCRAMENTCOUNTER',list:[
          ...list.slice(0,index),
          list[index]+1,
          ...list.slice(index+1)]}
};

export const decramentCounter = (list,index) => {
  return {type: 'DECRAMENTCOUNTER',list:[
          ...list.slice(0,index),
          list[index]-1,
          ...list.slice(index+1)]}
};