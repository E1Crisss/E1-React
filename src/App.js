import  React, { useState } from "react";
import { Base } from "./components/Base";

export function App(props) {
  const [base, setBase] = useState(props.base)
  const [newtarea, setNewTarea] = useState('');
 
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('ingrese nota');
    const newTareaIn = {
      tarea: newtarea,
      id: base.length +1
    };
    console.log(newTareaIn);

    setBase(base.concat(newTareaIn))
    setNewTarea('');
  } 

  const handleChange = (e) => {
    setNewTarea(e.target.value);
  }

  const handleReset = (e) => {
    setBase([]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Que tarea debes realizar</h3>
        <input type="text" onChange={handleChange} value={newtarea}/>
        <button disabled={newtarea? "" : "disabled"}>Agregar Tarea</button>
      <ol>
          {base.map(item =>{
          return <li><Base key={item.id} base={item}/></li>
          })}
      </ol>

      <button onClick={handleReset} disable={setBase? ([]) : "disabled"}>Borrar todas las tareas</button>
    </form>
    
  );
}

export default App
