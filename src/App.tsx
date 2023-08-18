import { useState } from 'react';
import './App.css';
import Input from './components/InputField';
import { Todo } from './components/Model';
import { TodoList } from './components/TodoList';

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])
  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id:Date.now(),todo:todo,isDone:false}]);
      setTodo("")
    }
  }
  console.log(todo)
  return (
    <div className="App">
      <h2 className='heading text-lg md:text-2xl'>Let's Doo</h2>
      <Input todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
      <TodoList todos = {todos} setTodos = {setTodos} />
    </div>
  );
}

export default App;

