import React, { useState } from "react";
function AddTask({ addtask }) {
    const [value, setValue] = useState("")
    const additem = () => {
        addtask(value)
        setValue("")
    }

    return (
        <>
            <div className="inputcontainer">

                <input type="text" className="input" placeholder="Add a task"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }} />
                <button className="btn" onClick={additem}>ADD</button>
            </div>
        </>
    )
}
export default AddTask;