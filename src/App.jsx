import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoButton } from './components/TodoButton';
import { Container } from './components/Container';
import './index.css';
import { useState } from 'react';

const TODOS = [
  {todo: "Limpiar la casa", completed: false},
  {todo: "Leer 10 páginas", completed: true},
  {todo: "Leer Correo", completed: false},
  {todo: "Avanzar el curso", completed: true},
  {todo: "Enviar correo", completed: false},
]


function App() {
  const [todos, setTodos] = useState(TODOS);
  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  
  return (
    <Container>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} setTodos={setTodos}  />

      <TodoList>
        {
          todos.map((todo) => <TodoItem todo={todo.todo} completed={todo.completed} key={todo.todo} />)
        }
      </TodoList>

      <TodoButton />
    </Container>
  )
}

export default App
