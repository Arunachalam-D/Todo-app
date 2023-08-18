import React, { FormEvent, useEffect, useRef, useState } from "react"
import { Todo } from "./Model"
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import './Style.css'


interface Props{
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo,todos,setTodos}:Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

   const  handleDone = (id:number) => {
        setTodos(todos.map((todo)=>
            todo.id === id ? {...todo,isDone : !todo.isDone}:todo
        ))
   }

   const  handleDelete = (id:number) => {
    setTodos(todos.filter((todo)=>
        todo.id !== id 
    ))
}

   const handleEdit = (e:FormEvent,id:number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => (todo.id === id ? {...todo,todo:editTodo} : todo))
        )
        setEdit(false);
    }
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])
    return(
        <form className="todos-single" onSubmit={(e)=>handleEdit(e,todo.id)}>
            {
                edit?(
                    <input ref={inputRef} value = {editTodo} onChange={(e)=>setEditTodo(e.target.value)} className="editBox"/>
                ):(
                    
                        todo.isDone ? (
                            <s className="todos-single-text">
                        {todo.todo}
                    </s>
                        ): (
                            <span className="todos-single-text">
                        {todo.todo}
                    </span>
                        )
                    
                )
            }
            
            
            <div className="flex">
                <span className="icon" onClick={()=>{if(!edit && !todo.isDone){
                        setEdit(!edit)
                }}}><FaEdit/></span>
                <span className="icon" onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
                <span className="icon" onClick={()=>handleDone(todo.id)}><FaCircleCheck/></span>
            </div>
        </form>
    )
    
}
export default SingleTodo