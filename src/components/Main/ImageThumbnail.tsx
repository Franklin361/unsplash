import React from 'react';

import Img from "react-cool-img";
import errorImage from '../../assets/error.png'
import loadingImage from '../../assets/loading.gif'

interface Props {
    url:string;
    id:string;
    label:string;
    setIdImage:React.Dispatch<React.SetStateAction<string>>;
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ImageThumbnail = ({url,id,label, setIdImage,setModal }:Props) => {

    console.log('imgafe')
    
    const handleDeleteImg = () => {
        console.log({id})
        setModal(()=>true)
        setIdImage(id);
    };

    return (
        <div className="container_img">
            <Img
                placeholder={loadingImage}
                src={url}
                error={errorImage}
                alt={url}
            />

            <div className="overlay_img">
                <label htmlFor="" className="label_img" title="Lorem ipsum dolor sit amet.">{label}</label>
                <button className="btn_delete" onClick={handleDeleteImg}>delete</button>
            </div>

        </div>
    )
}
