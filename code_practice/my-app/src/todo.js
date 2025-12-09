
import { useState } from 'react';

const Todo= ()=>
{

const [todos, setTodos] = useState(['learn React']);
const [toDo, setToDo] = useState('');

   const handleDelete = (x) => { 
    const u = todos.filter((_, e) => { x !== e })
    setTodos([...u])
  }
  

  return (
  <div>
    <input value={toDo} onChange={(e) => setToDo(e.target.value)}></input>
    <button onClick={ () => setTodos([...todos, toDo])}>add</button>
    <ul>
      {todos.map((e) => { 
        return <li onClick={handleDelete(e)}> {e}</li>
      }) }
    </ul>
  </div>
  )

}

export default Todo;
