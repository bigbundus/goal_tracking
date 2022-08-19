import React, {useState} from 'react'
import Todoform from './Todoform'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.todoName || /^\s*$/.test(todo.todoName)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <Todoform onSubmit={addTodo} />
            <ul>
            {
                todos.map(todo => {
                    return(
                        //<p key={todo.id}>{todo.todoName}</p>
                        <Todo key={todo.id} todo={todo} />
                    )
                    
                })
            }
            </ul>
        </div>
    )
}

export default TodoList