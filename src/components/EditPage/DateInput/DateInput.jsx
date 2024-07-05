import React from "react"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function DateInput() {
    const [selectedDate, setDate] = React.useState(null)

    return(
        <DatePicker
                    className="date-input"
                    selected={selectedDate}
                    onChange={date => {setDate(date); console.log(date)}}
                    dateFormat="Дата:  dd.MM.yyyy"

                />
    )
}

export default DateInput