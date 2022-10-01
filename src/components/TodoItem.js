import React, { useState } from 'react'
import {ListGroup} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import {TiArrowRight, TiDeleteOutline} from 'react-icons/ti'

function TodoItem({todo ,contentToggle}) {
  const [toggle, setToggle] = useState(contentToggle)
  const onClick = () => {
    setToggle(!toggle)

  }

  return (
            <div>

    <ListGroup.Item onClick={onClick}>
            {todo.title}
            <span style={{ fontSize : 20, position : "absolute" , right: 10}}>
              <TiDeleteOutline/>
            </span>

            {toggle? 
            
            <ListGroup.Item>{todo.content}</ListGroup.Item>  : ""
            }
        </ListGroup.Item>
            </div>
        
  )
}

export default React.memo(TodoItem)