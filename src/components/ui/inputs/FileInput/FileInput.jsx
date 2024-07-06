import React from "react"
import classes from "./FileInput.module.css"

function FileInput(file, setFile) {
    // const [file, setFile] = React.useState(null)
    return(
        <input 
        className={classes.fileInput}
        type="file" 
        onInput={event => setFile(event.target.file)} 
        file={file}/>
    )
}

export default FileInput