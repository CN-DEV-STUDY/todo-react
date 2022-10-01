import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button, InputGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onContentChange = (event) => {
    setContent(event.target.value);
  };


  const onSubmit = (event) => {
    event.preventDefault();
    const url = "/todo/register";
    const data = {
      mno: 1,
      uno: 1,
      title: title,
      content: content,
    };
    axios.post(url,data);

    setTitle("");
    setContent("");
  };

  return (
    <>
      <h3>Add Todo</h3>
      <form onSubmit={onSubmit}>
        <InputGroup size="lg">
          <Form.Control
            onChange={onTitleChange}
            value={title}
            placeholder="오늘 할 일"
          />
        </InputGroup>

        <FloatingLabel controlId="floatingTextarea2" label="">
          <Form.Control
            as="textarea"
            onChange={onContentChange}
            value={content}
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </>
  );
}

export default AddTodo;
