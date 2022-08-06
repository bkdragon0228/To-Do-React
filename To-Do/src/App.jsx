import React, { Component } from 'react';
import style from './App.module.css';

// function App() {
//     return <div className="App">hello</div>;
// }

// export default App;

export default class App extends Component {
    state = {
        todoData: [
            { id: '1', title: '공부하기', completed: false },
            { id: '2', title: '청소하기', completed: false },
        ],
        value: '',
    };
    getStyle = (completed) => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: completed ? 'line-through' : 'none',
        };
    };

    handleClick = (id) => {
        let newTodoData = this.state.todoData.filter((e) => e.id !== id);
        this.setState({ todoData: newTodoData });
    };

    handleInputChange = (e) => {
        let newValue = e.target.value;
        this.setState({ value: newValue });
    };
    handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: this.state.value,
            completed: false,
        };

        this.setState({
            todoData: [...this.state.todoData, newTodo],
            value: '',
        });
    };

    handleCheck = (id) => {
        let newTodoData = this.state.todoData.map((data) => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });
        this.setState({ todoData: newTodoData });
    };
    render() {
        return (
            <div className={style.container}>
                <div className={style.todoBlock}>
                    <div className="title">
                        <h1>To-Do List</h1>
                    </div>
                    <form
                        style={{ display: 'flex' }}
                        onSubmit={this.handleSubmit}
                    >
                        <input
                            type="text"
                            name="value"
                            value={this.state.value}
                            onChange={this.handleInputChange}
                            placeholder="할 일을 입력하세요"
                            style={{ flex: '10', padding: '5px' }}
                        />
                        <button style={{ flex: '2' }} type="submit">
                            입력
                        </button>
                    </form>

                    {this.state.todoData.map((e, i) => {
                        return (
                            <div style={this.getStyle(e.completed)} key={e.id}>
                                <input
                                    type="checkbox"
                                    onChange={() => this.handleCheck(e.id)}
                                />
                                {e.title}
                                <button
                                    className={style.deleteBtn}
                                    onClick={() => this.handleClick(e.id)}
                                >
                                    x
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
