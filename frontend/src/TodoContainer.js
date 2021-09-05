import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import TodoList from './TodoList';

import './TodoContainer.css';

class TodoContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boardName: props.boardName,
            todoList: props.todoList
        };
    }
    render() {
        return (
            <Container maxWidth="sm" className="todo-container">
                <div>{this.state.boardName}</div>
                <TodoList todoList={this.state.todoList} />
            </Container>
        )
    }
}

export default TodoContainer;