export const addTodo = (todo) => {
    let newTodoArray = todo.slice()
    return {
        type: 'ADDTODO',
        todo: [...newTodoArray,
        {
            key: todo.length.toString(),
            text: 'Finnalllllllle',
            completed: true,
            selected: false
        }
        ]
    }
};

export const removeTodo = (todo, index) => {
    let newTodoArray = todo.slice()
    return {
        type: 'REMOVETODO',
        todo: newTodoArray.slice(0, index).concat(newTodoArray.slice(index + 1, newTodoArray.length))
    }
};

export const toggleTodo = (todo, index) => {

    let newTodoArray = todo.slice()

    for (let i = 0; i < newTodoArray.length; i++) {
        newTodoArray[i] = { key: newTodoArray[i].key, text: newTodoArray[i].text, completed: newTodoArray[i].completed, selected: false }
        if (i === index) {
            newTodoArray[index] = { key: newTodoArray[index].key, text: newTodoArray[index].text, completed: newTodoArray[index].completed, selected: true }
        }
    }
    return {
        type: 'TOGGLETODO',
        todo: newTodoArray
    }
};

