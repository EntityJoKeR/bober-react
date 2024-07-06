import React from "react"
import "./FileInput.css"

function FileInput(file, setFile) {
    // const [file, setFile] = React.useState(null)
    return(
        <input 
        className="file-input"
        type="file" 
        onInput={event => setFile(event.target.file)} 
        file={file}/>
    )
}

export default FileInput