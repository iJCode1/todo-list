import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoButton } from './components/TodoButton';
import { Container } from './components/Container';
import './index.css';

const TODOS = [
  {todo: "Limpiar la casa", completed: false},
  {todo: "Leer 10 páginas", completed: true},
  {todo: "Avanzar el curso", completed: true},
  {todo: "Enviar correo", completed: false},
  {todo: "Lavar ropa", completed: true},
]

function App() {

  return (
    <Container>
      <TodoCounter completed={5} total={9} />
      <TodoSearch />

      <TodoList>
        {
          TODOS.map(({todo, completed}) => (
            <TodoItem todo={todo} key={todo} completed={completed} />
          ))
        }
      </TodoList>

      <TodoButton />
    </Container>
  )
}

export default App
