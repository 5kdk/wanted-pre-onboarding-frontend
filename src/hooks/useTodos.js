import { useEffect, useState } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../apis';

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = async e => {
    e.preventDefault();
    const todo = e.target[0].value.trim();

    try {
      const updatedData = await createTodo(todo);
      setTodos([...todos, updatedData]);
      e.target[0].value = '';
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  const update = async ({ id, todo, isCompleted }) => {
    const prevTodos = todos;
    setTodos(todos.map(todoItem => (todoItem.id === id ? { ...todoItem, todo, isCompleted } : todoItem)));

    try {
      await updateTodo({ id, todo, isCompleted });
      setError(null);
    } catch (err) {
      setError(err);
      setTodos(prevTodos);
    }
  };

  const remove = async id => {
    const prevTodos = todos;
    setTodos(todos.filter(todo => todo.id !== id));

    try {
      await deleteTodo(id);
      setError(null);
    } catch (err) {
      setError(err);
      setTodos(prevTodos);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const todos = await getTodos();
        setTodos(todos);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { todos, isLoading, error, create, update, remove };
};

export default useTodos;
