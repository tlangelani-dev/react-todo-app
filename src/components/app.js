import React from 'react';
import TodosList from './todos-list';

// this should come from server
const todos = [
    {
        task: 'Make React Tutorial',
        isCompleted: false
    },
    {
        task: 'Have a beer',
        isCompleted: true
    }
];

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todos: todos};
    }

    render() {
        return (
            <div>
                <h1>React Todos App</h1>
                <TodosList todos={this.state.todos}/>
            </div>
        );
    }
}
