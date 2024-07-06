import React from "react"
import "./EditForm.css"
import DateInput from "../../ui/inputs/DateInput/DateInput"
import TimeInput from "../../ui/inputs/TimeInput/TimeInput"
import FileInput from "../../ui/inputs/FileInput/FileInput"
import ServiceInput from "../../ui/inputs/ServiceInput/ServiceInput"


function EditForm(props) {
    const [file, setFile] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [description, setDescription] = React.useState(null)
    const [link, setLink] = React.useState(null)
    const [price, setPrice] = React.useState(null)
    const [author, setAuthor] = React.useState(null)

    function addService(event) {

    }

    return(
        <div className="edit-form">
            <form>
                <div className="photo">
                    <div className="img"></div>
                    <FileInput file={file} setFile={setFile}/>
                </div>
                <div className="event-datetime">
                    <div className="event-start">
                        <p>Начало мероприятия</p>
                        <DateInput /><TimeInput/>
                    </div>
                    <div className="event-end">
                        <p>Конец мероприятия</p>
                        <DateInput /><TimeInput/>
                    </div>
                    <div className="event-name">
                        <p>Название мероприятия</p>
                        <input type="text" value={name} onInput={event => setName(event.target.value)}/>
                    </div>
                    <div className="event-description">
                        <p>Описание мероприятия</p>
                        <textarea onInput={event => setDescription(event.target.value)}></textarea>
                    </div>
                    <div className="event-link">
                        <p>Ссылка</p>
                        <input type="text" value={link} onInput={event => setLink(event.target.value)}/>
                    </div>
                    <div className="services">
                        <div className="service-item">
                            <p>Добавить услугу</p>
                            <ServiceInput/>
                            <button onClick={addService}>Добавить</button>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="price">
                            <p>Цена</p>
                            <input type="text" value={price} onInput={event => setName(event.target.value)}/>
                        </div>
                        <div className="author">
                            <p>Автор</p>
                            <input type="text" value={author} onInput={event => setAuthor(event.target.value)}/>
                        </div>
                        <div className="buttons">
                            <button type="submit">Отправить</button>
                            <button type="reset">Очистить</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditForm