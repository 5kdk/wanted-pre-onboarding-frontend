import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Container, Error, Loader, SubTitle, TodoInput, TodoItem } from '../components';
import { useTodos } from '../hooks';
import { deleteToken, rem } from '../utils';
import { ROOT_URL } from '../constants';

const TodoList = styled.ul`
  padding-bottom: ${props => props.theme.spacing.lg};
`;

const Todo = () => {
  const { todos, isLoading, error, create, update, remove } = useTodos();

  if (isLoading) {
    return (
      <Container w={rem(800)} p="xl">
        <Loader />
      </Container>
    );
  }

  return (
    <>
      <Container w={rem(800)} p="xl">
        <SubTitle>Todo</SubTitle>
        {error && <Error textAlign="center">{error.response.data.message}</Error>}
        <TodoInput create={create} />
        {todos.length === 0 ? (
          <p>아직 Todo가 없습니다.</p>
        ) : (
          <TodoList>
            {todos.map(({ id, todo, isCompleted }) => (
              <TodoItem key={id} id={id} todo={todo} isCompleted={isCompleted} update={update} remove={remove} />
            ))}
          </TodoList>
        )}
      </Container>
      <Container w={rem(800)} mt="lg">
        <Link to={ROOT_URL} onClick={deleteToken}>
          <Button type="button">Sign out</Button>
        </Link>
      </Container>
    </>
  );
};

export default Todo;
