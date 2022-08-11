import React from 'react';

const Form = ({ inputValue, setInputValue, setList }) => {
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
        setInputValue('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex pt-2">
                <input
                    type="text"
                    name="value"
                    className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="할 일을 입력하세요"
                />
                <button
                    className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-300"
                    type="submit"
                >
                    입력
                </button>
            </form>
        </div>
    );
};

export default Form;
