import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <h1>TODO LIST</h1>
      <AddTodo />

        <Container fluid>
          <TodoList/>
        </Container>

    </>
  );
}

export default App;
