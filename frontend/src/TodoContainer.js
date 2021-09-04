import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import './TodoContainer.css';

class TodoContainer extends Component {
    render() {
        return (
            <Container maxWidth="sm" className="todo-container">
                <div>Todo List</div>
            </Container>
        )
    }
}

export default TodoContainer;