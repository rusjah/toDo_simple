import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {

  let [todos, setTodos] = useState([{
    id: Math.floor(Math.random() * 9999999),
    data: "24.01.1222",
    time: "10:12",
    note: "Make homework"
  }
  ]);


  const getDate = () => {
      const date = new Date()
      return `${date.getUTCDate()}.${date.getUTCMonth()+1}.${date.getUTCFullYear()}`
  }

  const getTime = () => {
    const date = new Date();
    return date.toTimeString().slice(0,5);
  }


  function submitHandler(e) {
    e.preventDefault();
    
    const todo = {
        id: Math.floor(Math.random() * 9999999),
        data:e.target.date.value ? e.target.date.value : getDate(),
        time: e.target.time.value ? e.target.time.value : getTime(),
        note: e.target.note.value
    }
    setTodos(prevTodos => {
        return [...prevTodos, todo];
    });

    e.target.time.value='';
    e.target.note.value='';
    e.target.date.value='';
  }


  function deleteTodo (selectedTodoID) {
    console.log('ald todos', todos);
    const newTodos = todos.filter(el => el.id !== selectedTodoID);
    setTodos(newTodos);
    console.log('new todos', newTodos);
  }


  
  return (
    <div className="App w-screen">
       <Header />
       <div className="min-h-[83vh] bg-orange-50 lg:p-20">
          <Form handlerFunction={submitHandler}/>
          <TodoList list={todos} del={deleteTodo}/>
       </div>
       <Footer />
    </div>
  );
}

export default App;
