
import React from 'react';

import { LayaoutImages } from './LayaoutImages';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../context/dataContext';
import { ImageResponse } from '../../interfaces/image';
import { ModalContext } from '../../context/modalContext';
import Loading from '../Loading'
import './style.css'


const index = () => {

    const { setData, data, loading, setLoading } = useContext(DataContext)
    const { setIdImage, setModal } = React.useContext(ModalContext)

    useEffect(() => {
        
        const fetching = async() => {
            const res = await fetch('https://unsplash-challenge.herokuapp.com/api/images');
            const data:ImageResponse[] = await res.json();
            console.log({data})
            setData(data);
            setLoading(false);
        };
        fetching();

    }, [])

    return (
        <>
            {
                (loading)
                ? <Loading/>
                : <LayaoutImages arr={data} setIdImage={setIdImage} setModal={setModal}/>
            }
        </>
    )
}

export default index
