
import { useState } from 'react';

const Todo= ()=>
{

const [todos, setTodos] = useState(['learn React']);
const [toDo, setToDo] = useState('');

  const handleDelete = (x) => { 
   setTodos( todos.filter(( e) =>  x !== e ));
  }
  

  return (
  <div>
    <input value={toDo} onChange={(e) => setToDo(e.target.value)}></input>
    <button onClick={ () => setTodos([...todos, toDo])}>add</button>
    <ul>
      {todos.map((p) => { 
        return <li onClick={()=>handleDelete(p)}> {p}</li>
      }) }
    </ul>
  </div>
  )

}

export default Todo;
