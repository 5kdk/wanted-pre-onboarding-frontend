import { Link } from 'react-router-dom';
import { Button, Container, Loader, SubTitle, TodoInput, TodoItem } from '../components';
import { useTodos } from '../hooks';
import { deleteToken, rem } from '../utils';
import { ROOT_URL } from '../constants';

const Todo = () => {
  const { todos, isLoading, error, create, update, remove } = useTodos();

  if (isLoading) return <Loader />;

  return (
    <>
      <Container w={rem(500)}>
        <SubTitle>Todo</SubTitle>
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
      <Container w={rem(500)} mt="lg">
        <Link to={ROOT_URL} onClick={deleteToken}>
          <Button type="button">Sign out</Button>
        </Link>
      </Container>
    </>
  );
};

export default Todo;
