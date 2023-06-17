import styled from 'styled-components';
import { Input, TodoButton } from '..';
import { rem } from '../../utils';

const StyledForm = styled.form`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const TodoInput = ({ create }) => (
  <StyledForm onSubmit={create}>
    <Input data-testid="new-todo-input" ref={node => node?.focus()} w={rem(400)} placeholder="Enter new todo!" />
    <TodoButton data-testid="new-todo-add-button" size="sm">
      + 추가
    </TodoButton>
  </StyledForm>
);

export default TodoInput;
