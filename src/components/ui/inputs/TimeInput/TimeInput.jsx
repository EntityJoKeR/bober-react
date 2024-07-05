import React from "react"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TimeInput() {
    const [selectedTime, setTime] = React.useState(null)
    return(
        <div className="time-input">
            <DatePicker
                    selected={selectedTime}
                    onChange={time => setTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={5}
                    timeCaption="Time"
                    timeFormat="HH:mm"
                    dateFormat="Время:  HH:mm"
                    className="time-input--inner"
                />
        </div>
    )
}

export default TimeInput