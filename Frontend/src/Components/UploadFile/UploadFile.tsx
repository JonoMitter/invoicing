import { useState } from 'react';
import './UploadFileStyles.css';

function UploadFile() {

    // const [sessionDate, setSessionDate] = useState(new Date());

    function UploadFileToUrl(e: MouseEvent){
        const inputFile = document.getElementById("file-input")
        const formData = new FormData();
        // formData.append("file-input", inputFile.files[0]);
    }

    return (
        <div>
            <h2>Upload File</h2>
            <form id="file-form">
                <input type="file" id="file-input" aria-label="file-input"/>
                <button type="submit" onClick={e => (UploadFileToUrl)}>Upload file</button>
            </form>
        </div>
    );
}

export default UploadFile;
