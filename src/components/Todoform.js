import React, {useState} from 'react'

function Todoform(props) {
    const [todoName, setToDoName] = useState('');


    const submitHandler = event => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000000),
            todoName: todoName,
        });

        setToDoName('');
    };

    const nameChangeHandler = event => {
        setToDoName(event.target.value);
    }

    return (
        <form className="todo-form" onSubmit={submitHandler}>
            <input 
                type="text" 
                placeholder='Add a ToDo' 
                value={todoName}
                name="text"
                className='todo-input'
                onChange={nameChangeHandler}
            />
            <button className='todo-button'>Add ToDo</button>
        </form>
    )
}

export default Todoform