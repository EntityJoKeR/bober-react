import React from "react"
import "./ServiceInput.css"


function ServiceInput() {
    return(
        <div>
            <input className="service-input service-input--name" type="text" placeholder="Название"></input>
            <input className="service-input service-input--price" type="text" placeholder="Цена"></input>
        </div>
        
    )
}

export default ServiceInput