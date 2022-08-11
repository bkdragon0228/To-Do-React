import React from 'react';
import style from './List.module.css';

const List = ({ list, setList }) => {
    const getStyle = (completed) => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: completed ? 'line-through' : 'none',
        };
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

    const handleClick = (id) => {
        let newList = list.filter((e) => e.id !== id);
        setList(newList);
    };

    return (
        <div>
            {list.map((e, i) => {
                return (
                    <div
                        key={e.id}
                        className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(e.id)}
                            />
                            <span
                                className={
                                    e.completed ? 'line-through' : undefined
                                }
                            >
                                {e.title}
                            </span>
                        </div>
                        <div>
                            <button
                                className="px-4 py-2 float-right"
                                onClick={() => handleClick(e.id)}
                            >
                                x
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
