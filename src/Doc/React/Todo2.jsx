import React, { useState } from 'react'

const Todo2 = () => {
    const [input, setinput] = useState("")
    const [todo, setTodo] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const addTodo = () => {
        if(input.trim() === "") {
            return alert("empty field")
        }


        if (editIndex !== null) {
            const updated = todo.map((item, index) => index === editIndex ? input : item)
            setTodo(updated)
            setEditIndex(null)
            setinput("")

        }

        else{
        setTodo([...todo, input]);

        }
        setinput("")
    }

    function deleteTodo (index) {
        const updated = todo.filter((item, indx) => indx !== index )
        setTodo(updated)
    }

    function updateTodo (index) {
        setinput(todo[index])
        setEditIndex(index)
    }

  return (
    <div>
        <input type="text" onChange={(e) => setinput(e.target.value)} value={input} />
        <button onClick={addTodo}>{editIndex !== null ? "UPDATE" : "ADD"}</button>
        
        {
            todo.map((item,index) => (
                <div key={index}>{item}
                    <button onClick={() => deleteTodo(index)}>delete</button>
                    <button onClick={() => updateTodo(index)}>update</button>
                </div>
            ))
        }
    </div>
  )
}

export default Todo2