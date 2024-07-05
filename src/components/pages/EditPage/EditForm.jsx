import React from "react"
import "./EditForm.css"
import DateInput from "../../ui/inputs/DateInput/DateInput"
import TimeInput from "../../ui/inputs/TimeInput/TimeInput"


function EditForm(props) {
    const [startDate, setStartDate] = React.useState()

    return(
        <div className="edit-form">
            <DateInput/>
        </div>
    )
}

export default EditForm