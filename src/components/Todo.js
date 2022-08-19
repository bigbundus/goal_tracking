import React, {useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Todo(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const todo = props.todo;

    const completeTodo = (id) => {
        console.log(id);
    };

    return (
        <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
            key={todo.id}
        >
            <div onClick={() => completeTodo(todo.id)}>
                {todo.todoName}
            </div>
            <div className='icons'>
                <RiCloseCircleLine />
                <TiEdit />
            </div>

        </div>
  )
}

export default Todo