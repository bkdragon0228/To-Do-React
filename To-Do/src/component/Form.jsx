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
        </div>
    );
};

export default Form;
