import TodoItemsLeft from './TodoItemsLeft';
import TodoFilter from './TodoFilter';
import TodoCompleted from './TodoCompleted';

export default function TodoFooter(props) {
  const { filter, setFilter } = props;

  return (
    <footer className="footer">
      <TodoItemsLeft />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoCompleted />
    </footer>
  );
}
