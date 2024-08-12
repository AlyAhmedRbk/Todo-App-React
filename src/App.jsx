import React, { useState, useEffect } from "react";
import Navbar from "./componet/navbar/Navbar";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckBox = (e) => {
    let id = e.target.name;

    todos.filter((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      setTodos([...todos]);
      saveToLS();
    })
  }

  const handleEdit = (e, id) => {
    // console.log(id);  
    let todo = todos.filter(todo => todo.id === id);
    // console.log(todo);
    setTodo(todo[0].todo);
    
    // delete todo
    let newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const handleDelete = (e, id) => {
    // console.log(id);

    let newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}]);
    setTodo("")
    console.log(todos);
  };
  return (
    <>
      <Navbar />
      <div className="container font-mono px-20 py-5 bg-blue-800 text-white min-h-screen">
        <h2 className="text-3xl font-bold text-center my-4">Add a Todo</h2>
        <div className="flex justify-center items-center my-5">
          <input
            type="text"
            className="w-1/3 px-3 rounded-md text-black"
            onChange={handleChange}
            value={todo}
          />
          <button
            onClick={handleAdd}
            disabled={todo.length<=3}
            className="bg-green-700 hover:bg-green-800 font-bold px-5 mx-5 rounded-lg text-xl
            disabled:bg-green-800"
          >
            Save
          </button>
        </div>
        <div className="todos border  border-slate-400 py-5  min-h-screen rounded">
          <h2 className="text-3xl font-bold text-center">Your Todos</h2>
          {todos.length === 0 && <div className="text-center m-10">No Todos Found!</div>}
          {todos.map(item => {
            return <div key={item.id} className="todo text-xl font-bold flex justify-around items-start m-5">
              <input type="checkbox" checked={todo.isCompleted} name={item.id} onChange={handleCheckBox} />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              <div className="buttons">
                <button
                  onClick={(e)=>{handleEdit(e, item.id)}}
                  className="bg-yellow-600 hover:bg-yellow-700 mx-3 px-5 rounded-lg "
                >
                  Edit
                </button>
                <button
                  onClick={(e) => { handleDelete(e, item.id) }}
                  className="bg-red-800 hover:bg-red-900 px-5 rounded-lg font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  );
};

export default App;
