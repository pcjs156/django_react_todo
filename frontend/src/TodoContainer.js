import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import TodoList from './TodoList';

import './TodoContainer.css';

class TodoContainer extends Component {
    render() {
        return (
            <Container maxWidth="sm" className="todo-container">
                <div>Todo List</div>
                <TodoList></TodoList>
            </Container>
        )
    }
}

export default TodoContainer;