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
    );
};

export default List;
