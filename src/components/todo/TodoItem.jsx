import { useState } from 'react';
import styled from 'styled-components';
import { rem } from '../../utils';
import { Input, TodoButton } from '..';

const Wrapper = styled.li`
  display: flex;
  width: ${rem(800)};
  height: ${rem(32)};
  align-items: center;
  justify-content: space-between;
  margin: ${props => props.theme.spacing.md} auto;
  border-bottom: 1px solid ${props => props.theme.colors.gray};

  span {
    display: inline-block;
  }
  input[type='checkbox']:checked + span {
    text-decoration: line-through;
  }
`;

const ButtonWrapper = styled.div`
  min-width: ${rem(70)};
  max-width: ${rem(100)};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TodoItem = ({ id, todo, isCompleted, update, remove }) => {
  const [editValue, setEditValue] = useState(todo);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <Wrapper>
      {isEditMode ? (
        <>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => update({ id, todo, isCompleted: !isCompleted })}
          />
          <Input
            type="text"
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            data-testid="modify-input"
            w={rem(500)}
          />
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => update({ id, todo, isCompleted: !isCompleted })}
          />
          <span>{todo}</span>
        </>
      )}
      {isEditMode ? (
        <ButtonWrapper>
          <TodoButton
            type="button"
            data-testid="submit-button"
            onClick={() => {
              update({ id, todo: editValue, isCompleted });
              setIsEditMode(false);
            }}>
            제출
          </TodoButton>
          <TodoButton type="button" data-testid="cancel-button" onClick={() => setIsEditMode(false)} caution={true}>
            취소
          </TodoButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <TodoButton
            type="button"
            data-testid="modify-button"
            onClick={() => {
              setIsEditMode(true);
              setEditValue(todo);
            }}>
            수정
          </TodoButton>
          <TodoButton type="button" data-testid="delete-button" onClick={() => remove(id)} caution={true}>
            X
          </TodoButton>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default TodoItem;
