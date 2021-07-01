import { useState, useRef } from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
    display: inline-flex;
    margin: 5px;

    & > input {
        display: none;
    }

    & > #chooseFile {
        display: inline-block;
        padding: 5px 10px;
        background-color: #DDD;
        border-radius: 5px 0px 0px 5px;
    }

    & > #filename {
        width: 150px;
        height: 28px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: inline-block;
        padding: 5px;
        border: 1px solid #DDD;
    }

    & > #uploadButton {
        display: inline-block;
        padding: 5px 10px;
        background-color: #DDD;
        border-radius: 0px 5px 5px 0px;
    }

    & > #chooseFile:hover, & > #uploadButton:hover {
        cursor: pointer;
        filter: brightness(75%);
    }

    & > #filename:hover {
        cursor: pointer;
    }
`;

const Upload = ({onUpload=()=>{}}) => {
    const [importData, setImportData] = useState(null);
    const [fileName, setFileName] = useState('No File Selected');
    const fileInput = useRef(null);

    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file === undefined) return;

        if (file.type.match('application/json')) {
            const reader = new FileReader();
            setFileName(file.name);

            reader.onload = (e) => {
                let text = reader.result;
                let obj = JSON.parse(text);

                //check and import what's needed
                let newObj = {...obj};
                
                setImportData(newObj);
            }

            reader.readAsText(file);
        } else {
            setImportData(null);
            setFileName('Incorrect File Type');
        }
    }

    const onImport = () => {
        if (importData) {
            setFileName('File Uploaded')
            onUpload(importData);
            setImportData(null);
            fileInput.current.value = '';
        } else {
            setFileName('No File Selected');
        }
    }

    return (
        <StyledComp>
            <input type='file' id='fileUpload' onChange={onFileChange} ref={fileInput}/>
            <label id='chooseFile' htmlFor='fileUpload'>Choose File</label>
            <label id='filename' htmlFor='fileUpload'>{fileName}</label>
            <div id='uploadButton' onClick={onImport}>Upload</div>
        </StyledComp>
    );
}

export default Upload;