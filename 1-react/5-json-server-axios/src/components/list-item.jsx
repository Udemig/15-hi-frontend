const ListItem = ({ todo, deleteTodo }) => {
  return (
    <div className="list-item">
      <div className="item-content">
        <h2>{todo.title}</h2>
      </div>

      <div className="item-details">
        <span className="item-category">{todo.category}</span>
        <span className="item-date">
          {new Date(todo.date).toLocaleString("tr", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      <div className="item-actions">
        <button onClick={() => deleteTodo(todo.id)}>Sil</button>
      </div>
    </div>
  );
};

export default ListItem;
