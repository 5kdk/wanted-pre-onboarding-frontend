import { Input } from '..';

const TodoInput = ({ create }) => (
  <form onSubmit={create}>
    <Input data-testid="new-todo-input" placeholder="Enter new todo!" ref={node => node?.focus()} />
    <button data-testid="new-todo-add-button">추가</button>
  </form>
);

export default TodoInput;
