import { Container } from "./styled/components";

interface TodoListItem {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

interface Props {
  todo: TodoListItem
}

export default function TodoListItem({ todo }: Props) {
  return (
    <Container>
      {todo.title}
    </Container>
  );
}