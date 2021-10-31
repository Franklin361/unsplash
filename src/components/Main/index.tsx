
import React, { useEffect, useState } from 'react';
import { images_url } from '../../assets/data';

import './style.css'
import { LayaoutImages } from './LayaoutImages';

import Modal from '../Modal'

const index = () => {

    const [modal, setModal] = useState(false);
    const [images, setImages] = useState([])

    useEffect(() => {
        
        const fetching = async() => {
            const res = await fetch('https://unsplash-challenge.herokuapp.com/api/images');
            const data = await res.json();
            console.log({data})
            setImages(data);
        };
        fetching();

    }, [])

    return (
        <main className="container_gallery">
            {
                (modal) && <Modal>
                    <h2 className="title_modal">Are you sure?</h2>

                    <div className="container_input_modal">
                        <label htmlFor="label">Password</label>
                        <input
                            type="text"
                            name='password'
                            id="label"
                            placeholder='***************'
                            required
                        />
                    </div>

                    <div className="container_buttons">
                        <button type="button" className="btn_cancel" onClick={() => { setModal(false) }}>Cancel</button>
                        <button type="submit" className="btn_submit delete">Delete</button>
                    </div>
                </Modal>
            }
            <LayaoutImages arr={images} onClick={setModal}/>
        </main>
    )
}

export default index
