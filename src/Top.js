import "./Top.css"
import React, { useState } from "react"
function Top() {

    
    var [nTime, nTimeSet] = useState("time")
    var nDate=new Date().getDate()
    function updateClock() {
        var now = new Date()
        var hours = now.getHours()
        var minutes = now.getMinutes()
        var seconds = now.getSeconds()
        
        nTimeSet(hours+":"+minutes+":"+seconds)
    }
   
    var interval = setInterval(updateClock,1000)

    const currentDate = new Date();
    const currentMonthName = currentDate.toLocaleString('en-US', { month: 'long' });


    return (
        <div>
            <h1>Hello there !</h1>
            <p>I help you manage your Activities :)</p>
            <div className="top-container">
                <div className="top-box-1">
                    <h1>23°C</h1>
                    <h3>Chennai</h3>
                </div>

                <div className="top-box-2">
                    <h1>{nDate}   {currentMonthName}</h1>
                    <h3>{nTime}</h3>
                </div>

                <div className="top-box-3">
                    <h1>Built Using</h1>
                    <h3>React + Node</h3>
                </div>
            </div>
        </div>
    )
}

export default Top