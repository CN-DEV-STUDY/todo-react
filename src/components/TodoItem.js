import React from 'react'
import {ListGroup} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

function TodoItem({todo}) {
  return (
        <ListGroup.Item>
            {todo.title}
        </ListGroup.Item>
  )
}

export default TodoItem