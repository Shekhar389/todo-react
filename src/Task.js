
export const Task=(props)=>{
    return(<div className="task">
        <h1>{props.taskName}</h1>
        <button className="btn" onClick={()=>props.deleteTask(props.id)}></button>
    </div>)
}