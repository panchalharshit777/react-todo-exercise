 function TodoItem({id, text , onDelete}) {
        return (
            <li>
                {id} - {text}
                <button onClick={() => onDelete(id)}>Delete</button>    
            </li>
        );
}
export default TodoItem; 