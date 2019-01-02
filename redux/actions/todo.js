export const addTodo = (todo) => {
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

