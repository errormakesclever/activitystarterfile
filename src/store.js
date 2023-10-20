import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(
    {
        reducer: function(state=[],actions){
            if(actions.type==="addActivity")
            {
                return [...state,{id:state.length,activity:actions.activity}]
            }
            else if(actions.type==="deleteActivity")
            {
                var temp = state.filter((item)=>{if(item.id!==actions.id){return true}})
                state=temp 
                return state
            }
            else if(actions.type==="initialActivity")
            {
                state = actions.activity
                return state
            }

            return state
        }
    }
)

export default store