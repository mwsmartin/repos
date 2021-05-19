const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ];
        
        case 'ADD_TODO_COMPLETE':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: true,
                }
            ];    
        case 'DELETE_TODO': 
            return state.filter(todo => todo.id !== action.id);
        case 'TOGGLE_TODO': 
            return state.map(todo => 
                todo.id === action.id ? {...todo, completed: !todo.completed  }: todo
            )
        default:
            return state;
    }
}


export default todos;