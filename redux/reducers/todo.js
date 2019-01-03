const defaultState = {
    todo: [{
        key: '0',
        text: 'Eat food',
        completed: true,
        selected: false
    }, {
        key: '1',
        text: 'Exercise',
        completed: false,
        selected: false
    }, {
        key: '2',
        text: 'Sport',
        completed: false,
        selected: false
    }, {
        key: '3',
        text: 'Work',
        completed: true,
        selected: false
    }
    ]
};


export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADDTODO':
            return Object.assign({}, state, {
                todo: action.todo
            });
        case 'REMOVETODO':
            return Object.assign({}, state, {
                todo: action.todo
            });
        case 'TOGGLETODO':
            return Object.assign({}, state, {
                todo: action.todo
            });

        default:
            return state;
    }
}