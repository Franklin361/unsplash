import React from 'react';

import Img from "react-cool-img";
import errorImage from '../../assets/error.png'
import loadingImage from '../../assets/loading.gif'

interface Props {
    src:string;
    onClick:React.Dispatch<React.SetStateAction<boolean>>
}

export const ImageThumbnail = ({src,onClick}:Props) => {

    console.log('imgafe')

    const handleDeleteImg = () => {
        onClick(()=>true); 
    };

    return (
        <div className="container_img">
            <Img
                placeholder={loadingImage}
                src={src}
                error={errorImage}
                alt={src}
            />

            <div className="overlay_img">
                <label htmlFor="" title="Lorem ipsum dolor sit amet.">Lorem ipsum dolor sit amet.</label>
                <button className="btn_delete" onClick={handleDeleteImg}>delete</button>
            </div>

        </div>
    )
}
