import React, { useEffect, useState } from 'react'
import {ListGroup , Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import TodoItem from './TodoItem';
  

function TodoList() {

    const [todoList, setTodoList] = useState([]);
    const [loading , setLoading] = useState(false);
    const viewContent = false;

    useEffect(()=> {
        const getList = async() => {
            try {
                setTodoList([]);
                setLoading(true);
                const response = await axios.get("/todo/list/1");
                setTodoList(()=>response.data);
            } catch(e) {
                setLoading(false);
            } ;
        } ;
        getList();
        setLoading(false);
    } , []) // 처음 한번 로드될 때만 실행

    if (loading) return <div>로딩중..</div>;

    return (

        <ListGroup>
            <h6>할일 개수 : {todoList.length}</h6>

            {todoList.map((todo) =>  

            <TodoItem
            key={todo.tno}
            todo = {todo}
            contentToggle = {viewContent}
            />
                
            )}
        </ListGroup>
    )
}

export default React.memo(TodoList)