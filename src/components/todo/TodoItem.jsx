import { useState } from 'react';
import styled from 'styled-components';
import { rem } from '../../utils';
import { Input, TodoButton } from '..';

const Wrapper = styled.li`
  display: flex;
  height: ${rem(32)};
  align-items: center;
  justify-content: space-between;
  margin: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.gray};

  span {
    display: inline-block;
  }
  label {
    position: absolute;
    opacity: 0;
  }
  input[type='checkbox']:checked + span {
    text-decoration: line-through;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TodoItem = ({ id, todo, isCompleted, update, remove }) => {
  const [editValue, setEditValue] = useState(todo);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleToggle = () => update({ id, todo, isCompleted: !isCompleted });

  const handleInputChange = e => setEditValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    update({ id, todo: editValue, isCompleted });
    setIsEditMode(false);
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      update({ id, todo: editValue, isCompleted });
      setIsEditMode(false);
    }
  };

  const handleEditMode = () => {
    setIsEditMode(prev => !prev);
  };

  const handleDeleteClick = () => {
    remove(id);
  };

  return (
    <Wrapper>
      <label htmlFor={`todo-${id}`}>{`toggle todo-${id}`}</label>
      <input type="checkbox" id={`todo-${id}`} checked={isCompleted} onChange={handleToggle} />
      {isEditMode ? (
        <>
          <Input
            value={editValue}
            onChange={handleInputChange}
            onKeyUp={handleEnter}
            data-testid="modify-input"
            w={rem(500)}
          />
          <ButtonWrapper>
            <TodoButton data-testid="submit-button" onClick={handleSubmit} mr="xs">
              제출
            </TodoButton>
            <TodoButton type="button" data-testid="cancel-button" onClick={handleEditMode} caution>
              취소
            </TodoButton>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <span>{todo}</span>
          <ButtonWrapper>
            <TodoButton type="button" data-testid="modify-button" mr="xs" onClick={handleEditMode}>
              수정
            </TodoButton>
            <TodoButton type="button" data-testid="delete-button" onClick={handleDeleteClick} caution>
              X
            </TodoButton>
          </ButtonWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default TodoItem;
