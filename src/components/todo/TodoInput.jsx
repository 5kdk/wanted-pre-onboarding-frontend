import { Input, TodoButton } from '..';
import { rem } from '../../utils';

const TodoInput = ({ create }) => (
  <form onSubmit={create}>
    <Input
      data-testid="new-todo-input"
      ref={node => node?.focus()}
      w={rem(400)}
      mb="xl"
      mr="md"
      placeholder="Enter new todo!"
    />
    <TodoButton data-testid="new-todo-add-button" size="sm">
      + 추가
    </TodoButton>
  </form>
);

export default TodoInput;
