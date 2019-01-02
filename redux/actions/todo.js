export const addTodo = (todo) => {
    console.log("new index : " + todo.length.toString())
    console.log("last index : " + todo[todo.length - 1].key)
    console.log("last index : " + (parseInt(todo[todo.length - 1].key)+1).toString())
    return {
        type: 'ADDTODO',
        todo: [...todo,
        {
            key: todo.length.toString() ,
            text: 'Finnalllllllle',
            completed: true,
            selected: false
        }
        ]
    }
};


export const removeTodo = (todo,index) => {
    console.log("Index :::::" + index)
    return {
        type: 'REMOVETODO',
        todo: todo.slice(0, index).concat(todo.slice(index + 1, todo.length))
    }
};

