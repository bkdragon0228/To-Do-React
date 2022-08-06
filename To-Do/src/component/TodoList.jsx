import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import style from './TodoList.module.css';
const TodoList = () => {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={style.container}>
            <div className={style.todoBlock}>
                <div className="title">
                    <h1>To-Do List</h1>
                </div>
                <Form
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setList={setList}
                />
                <List list={list} setList={setList} />
            </div>
        </div>
    );
};

export default TodoList;
