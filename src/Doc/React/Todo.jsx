import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState("")
    const [todo, setTodo] = useState([])
    const [editIndex, setEditIndex] = useState(null)


    function addTodon() {
        if(input.trim() === "") {
            return alert("input is empty")
        }

        if (editIndex !== null) {
            const updated = todo.map((item, index) => index === editIndex ? input : item)
            setTodo(updated)
            editIndex(null)
        }
        else {
            setTodo([...todo, input])
  
        }

        setInput("")

    }

    function DeleteTodo(index) {
        console.log(todo);
        
        const updated = todo.filter((itm, indx) => indx !== index)
        console.log(updated);
        
        setTodo(updated)
    }


    function updateTodo (index){
        setInput(todo[index])
        setEditIndex(index)
    }

  return (
    <div>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
        <button onClick={addTodon}>submithh</button>

        {
            todo.map((item, index) => (
                <div key={index}>{item}
                    <button onClick={()=> DeleteTodo(index)}>X</button>
                    <button onClick={()=> updateTodo(index)}>update</button>
                </div>
            ))
        }
    </div>
  )
}

export default Todo