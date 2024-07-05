import React from "react"
import "./DateInput.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function DateInput() {
    const [selectedDate, setDate] = React.useState(null)

    return(
        <div className="date-input">
            <DatePicker
                    className="date-input--inner"
                    selected={selectedDate}
                    onChange={date => {setDate(date); console.log(date)}}
                    dateFormat="Дата:  dd.MM.yyyy"
                />
        </div>
    )
}

export default DateInput