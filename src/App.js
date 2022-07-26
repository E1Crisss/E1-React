import  React, { useState } from "react";
import { Base } from "./components/Base";
import { Body } from "./components/Body";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import NavBar from "./components/NavBar";
import { P } from "./components/P";
import Home from "./pages/index"
import TodoList from "./pages/TodoList"
import PokeApi from "./pages/PokeApi"




export function App(props) {
  const [base, setBase] = useState(props.base)
  const [newtarea, setNewTarea] = useState('');
 
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('ingrese nota');
    const newTareaIn = {
      tarea: newtarea,
      id: base.length +1,
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
    setNewTarea('');

  }
  
  return (
    <Body>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' index element={<Home />}></Route>
          {/* <Route path='home' element={<Navigate to='/'/>}></Route> */}
          <Route path='todolist' element={<TodoList />}></Route>{''}
          <Route path='pokeapi' element={<PokeApi />}></Route>{''}
        </Routes>
      </Router>
    <form onSubmit={handleSubmit}>
      
      <h2>¿Qué tarea realizaras hoy?</h2>
        <Input type="text" onChange={handleChange} value={newtarea}/>
        <Button disabled={newtarea? "" : "disabled"}>Agregar Tarea</Button>
        <Button type='button' onClick={handleReset} disabled={base? base.id : "disabled"}>Reset</Button>
      <ol>
          {base.map(item =>{
            return <li><Base key={item.id} base={item}/></li>
          })}
      </ol>
      <P>By Cristian Manuel Gauna Dev <br/>Nucba Student</P>
    </form>
    </Body>        
  );
}

export default App
