import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
import '../assets/css/UploadImageToS3WithReactS3.css';
import logo from '../assets/img/01.png';

const S3_BUCKET =process.env.REACT_APP_BUCKET_NAME;
const REGION =process.env.REACT_APP_REGION;
const ACCESS_KEY =process.env.REACT_APP_ACCESS_ID;
const SECRET_ACCESS_KEY =process.env.REACT_APP_ACCESS_KEY;

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return  <div className="b">
                <div className="titulo"><h2>Nueva Carga de Imagenes, productos 2021</h2></div>
                <img src={logo}></img>
                <div className="titulo"><h4>Ignovando, para servir mejor!</h4></div>
                <input type="file" onChange={handleFileInput}/>
                <div><br></br></div> 
                <button onClick={() => handleUpload(selectedFile)}>Envio</button>
            </div>
}

export default UploadImageToS3WithReactS3;
