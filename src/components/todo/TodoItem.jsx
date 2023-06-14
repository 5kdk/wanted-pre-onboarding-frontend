import styled from 'styled-components';
import { useState } from 'react';
import { rem } from '../../utils';

const Wrapper = styled.li`
  display: flex;
  height: ${rem(32)};
  align-items: center;
  justify-content: space-between;

  span {
    display: inline-block;
    width: 100%;
  }
  input[type='checkbox']:checked + span {
    text-decoration: line-through;
  }
`;

const TodoItem = ({ id, todo, isCompleted, update, remove }) => {
  const [editValue, setEditValue] = useState(todo);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <Wrapper>
      {isEditMode ? (
        <input type="text" value={editValue} onChange={e => setEditValue(e.target.value)} />
      ) : (
        <>
          <input type="checkbox" checked={isCompleted} onChange={() => update({ id, todo, isCompleted })} />
          <span>{todo}</span>
        </>
      )}
      <button
        type="button"
        data-testid="modify-button"
        onClick={
          isEditMode
            ? () => {
                update({ id, todo: editValue, isCompleted });
                setIsEditMode(false);
              }
            : () => setIsEditMode(true)
        }>
        {isEditMode ? '확인' : '수정'}
      </button>
      <button type="button" data-testid="delete-button" onClick={() => remove(id)}>
        X
      </button>
    </Wrapper>
  );
};

export default TodoItem;
