import React from "react"
import DateInput from "./DateInput/DateInput"
import TimeInput from "./TimeInput/TimeInput"


function EditForm(props) {
    const [startDate, setStartDate] = React.useState()

    return(
        <div>
            <DateInput/>
            <TimeInput/>
        </div>
    )
}

export default EditForm