import TodoItem from './TodoItem';

export default function TodoList(props) {
  const { filter, todos, setTodos } = props;

  const onCheck = todoItem => e => {
    const element = e.currentTarget;
    setTodos(todos.map(item => (item.id === todoItem.id ? { ...item, completed: element.checked } : item)));
  };

  const onDelete = todoItem => () => {
    setTodos(todos.filter(item => item.id !== todoItem.id));
  };

  return (
    <ul className="todo-list">
      {todos.map(item => (
        <TodoItem key={item.id} item={item} onCheck={onCheck} onDelete={onDelete} />
      ))}
    </ul>
  );
}
