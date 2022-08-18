export default function TodoItem(props) {
  const { item, onCheck, onDelete } = props;

  return (
    <li className="">
      <div className="view">
        <input className="toggle" type="checkbox" checked={item.completed} onChange={onCheck(item)} />
        <label>{item.title}</label>
        <button className="destroy" onClick={onDelete(item)}></button>
      </div>
      <input type="text" className="edit" defaultValue={item.title} />
    </li>
  );
}
