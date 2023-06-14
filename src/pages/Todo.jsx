import { Container, Loader, TodoInput, TodoItem } from '../components';
import { useTodos } from '../hooks';
import { rem } from '../utils';

const Todo = () => {
  const { todos, isLoading, error, create, update, remove } = useTodos();

  if (isLoading) return <Loader />;

  return (
    <Container w={rem(500)}>
      <TodoInput create={create} />
      {error && <div>{error.response.data.message}</div>}
      {todos.length === 0 ? (
        <div>아직 Todo가 없습니다.</div>
      ) : (
        todos.map(({ id, todo, isCompleted }) => (
          <TodoItem key={id} id={id} todo={todo} isCompleted={isCompleted} update={update} remove={remove} />
        ))
      )}
    </Container>
  );
};

export default Todo;
