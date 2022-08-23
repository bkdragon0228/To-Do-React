import React from 'react';
import style from './List.module.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
            <DragDropContext>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {list.map((e, i) => (
                                <Draggable
                                    key={e.id}
                                    draggableId={e.id.toString()}
                                    index={i}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            className={`${
                                                snapshot.isDragging
                                                    ? 'bg-gray-400'
                                                    : 'bg-gray-100'
                                            } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
                                        >
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    onChange={() =>
                                                        handleCheck(e.id)
                                                    }
                                                />
                                                <span
                                                    className={
                                                        e.completed
                                                            ? 'line-through'
                                                            : undefined
                                                    }
                                                >
                                                    {e.title}
                                                </span>
                                            </div>
                                            <div>
                                                <button
                                                    className="px-4 py-2 float-right"
                                                    onClick={() =>
                                                        handleClick(e.id)
                                                    }
                                                >
                                                    x
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default List;
