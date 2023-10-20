import { useEffect, useState } from "react";
import "./Activity.css"
function Activity(props)
{   
 
    //Entered User Activity to Add
    var [eactivity,seteactivity] = useState("")

    function handleChange(e)
    {
        seteactivity(e.target.value)
    }

    function addtoArray()
    {
        props.setActivarr([...props.activarr,{id:props.activarr.length,activity:eactivity}])
    }

    function deletefromArr(selectedId)
    {
        var temp = props.activarr.filter((item)=>{if(item.id!==selectedId){return true}})
        props.setActivarr(temp)
        
    }

    return(
        <div style={{marginTop:"30px"}} className="activity-container">
            <div className="activity-input-container">
            <h1 style={{fontSize:"3vw"}}>Manage Activities</h1>
            
            <input type="text" value={eactivity} onChange={handleChange} className="activity-input" placeholder="What are you plans?"></input>
            <button className="activity-add" onClick={addtoArray}>Add</button>

            <div>

            </div>

            </div>
            <div className="activity-list-container">
                <h1>Todays Activity</h1>
                {props.activarr.length==0?<p>You haven't added any activity yet</p>:""}
                {props.activarr.map(function(item,index){
                    return (
                        <div key={index} className="activity-list-item">
                <p>{item.activity}</p> <p className="activity-delete" onClick={()=>deletefromArr(item.id)}>Delete Activity</p>
                </div>
                    )
                })}
                

            </div>
        </div>
    )
}

export default Activity