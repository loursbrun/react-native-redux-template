export const addTodo = (todo, text) => {
    console.log("text:" + text)
    let newTodoArray = todo.slice()
    return {
        type: 'ADDTODO',
        todo: [...newTodoArray,
        {
            key: todo.length.toString(),
            text: text,
            completed: false,
            selected: false
        }
        ]
    }
};

export const removeTodo = (todo, index) => {
    let newTodoArray = todo.slice(0, index).concat(todo.slice(index + 1, todo.length))
    for (let i = 0; i < newTodoArray.length; i++) {
        newTodoArray[i] = { key: i.toString(), text: newTodoArray[i].text, completed: newTodoArray[i].completed, selected: newTodoArray[i].selected }
    }

    return {
        type: 'REMOVETODO',
        todo: newTodoArray
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

