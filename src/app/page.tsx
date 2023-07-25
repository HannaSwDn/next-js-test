'use client';

import Link from 'next/link';
import { Container } from './styled/components';
import TodoListItem from './TodoListItem';
import { getTodos } from './fetch/todos';

export default async function Home() {
  const todos = await getTodos();

  return (
    <Container>
      <h1>Todos</h1>
      <Link href="/new">New</Link>

      {
        todos.map(todo => {return <TodoListItem key={todo.id} todo={todo} />})
      }
    </Container>
  )
}