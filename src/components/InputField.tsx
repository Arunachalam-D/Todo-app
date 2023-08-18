import { useRef } from 'react'
import './Style.css'

interface Props {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=> void
}
const Input = ({todo, setTodo,handleAdd}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return(
        <form className='input' onSubmit={(e)=>{
            handleAdd(e);
            inputRef.current?.blur()
        }
        }>
            <input className='input-field' ref={inputRef} type='text' placeholder="Enter a task" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button className='btn' type='submit'>Start</button>
        </form>
    )
}
export default Input