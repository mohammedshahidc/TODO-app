import React from "react";

function ListTask({ task, removeTask, index }) {


    return (
        <>
            <div>

                <div className="listTask">
                    {task.title}
                    <button className="dlbtn" onClick={() => { removeTask(index) }}>Delete</button>
                </div>
            </div>


        </>
    )
}
export default ListTask;