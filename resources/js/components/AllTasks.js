import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function AllTasks(){
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        console.log("useeffect")
        getTasks()
    }, [])

    const getTasks = async () => {
        const response = await axios.get("/api/alltasks");
        console.log("gettasks")
        setTasks(response.data.tasks)
    }

    return(
        <div>
            {console.log(tasks, "cc")}
            <h1>Task一覧</h1>
            
            <ul>
                {tasks.map((task) => <li key={task.id}>{task.taskName}</li>)}
                {tasks.map((task) => {console.log(task.taskName)})}
                

            </ul>
            {console.log(tasks, "ascs")}

        </div>
        
    )
}