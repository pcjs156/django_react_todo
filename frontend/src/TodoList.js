import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import { ListItemSecondaryAction } from '@material-ui/core';


class TodoList extends Component {
    itemObjects = [
        { id: 1, content: '햄찌사랑' },
        { id: 2, content: '민수사랑' },
        { id: 3, content: '김찌사랑' },
    ];

    render() {
        return (
            <List>
                {this.itemObjects.map((item) => {
                    return (
                        <ListItem key={item.id}>
                            <Checkbox edge="start" />
                            <ListItemText primary={`Item ${item.id} : Content (${item.content})`} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        )
    }
}

export default TodoList;