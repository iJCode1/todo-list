function TodoCounter({ completed = 0, total = 0 }) {
  return(
    <h1>Has completado {completed} de {total} TODOS</h1>
  )
}

export {TodoCounter};
