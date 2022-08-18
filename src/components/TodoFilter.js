export default function TodoFilter(props) {
  const {filter, setFilter} = props;

  const filterList = ['All', 'Active', 'Completed'];

  return (
    <ul className="filters">
      {filterList.map((item, index) => (
        <li key={index}>
          <a href="/" className={filter === item.toLowerCase() ? 'selected' : ''}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
