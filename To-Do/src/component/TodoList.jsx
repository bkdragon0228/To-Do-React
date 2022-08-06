import React, { useState } from 'react';
import style from './TodoList.module.css';
const TodoList = () => {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const getStyle = (completed) => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: completed ? 'line-through' : 'none',
        };
    };

    const handleClick = (id) => {
        let newList = list.filter((e) => e.id !== id);
        setList(newList);
    };

    const handleInputChange = (e) => {
        let newInputValue = e.target.value;
        setInputValue(newInputValue);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: inputValue,
            completed: false,
        };

        setList((prev) => [...prev, newTodo]);
    };

    const handleCheck = (id) => {
        let newList = list.map((data) => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });

        setList(newList);
    };

    return (
        <div className={style.container}>
            <div className={style.todoBlock}>
                <div className="title">
                    <h1>To-Do List</h1>
                </div>
                <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="value"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="할 일을 입력하세요"
                        style={{ flex: '10', padding: '5px' }}
                    />
                    <button style={{ flex: '2' }} type="submit">
                        입력
                    </button>
                </form>

                {list.map((e, i) => {
                    return (
                        <div style={getStyle(e.completed)} key={e.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(e.id)}
                            />
                            {e.title}
                            <button
                                className={style.deleteBtn}
                                onClick={() => handleClick(e.id)}
                            >
                                x
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TodoList;
