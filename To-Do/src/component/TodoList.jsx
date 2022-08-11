import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import style from './TodoList.module.css';
const TodoList = () => {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3">
                    <h1 className="text-3xl font-bold ">To-Do List</h1>
                    <button>Delete all</button>
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
