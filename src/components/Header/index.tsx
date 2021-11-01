import Modal from '../Modal'
import logo from '../../assets/my_unsplash_logo.svg'
import lupa from '../../assets/lupa.png'

import './style.css'
import { useDebounce } from '../../hooks/useDebounce';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/modalContext';
import { useForm } from '../../hooks/useForm';
import { DataContext } from '../../context/dataContext';
import { ImageResponse } from '../../interfaces/image';

const index = () => {

    const { modal, setModal} = useContext(ModalContext);
    const { setData, setLoading} = useContext(DataContext);
    const { term, onChange } = useForm({term:''})
    const { debouncedValue } = useDebounce(term, 1000);

    const handleClick = () => {
        setModal(true)
    };
    
    const fetching = async() => {
        
        const url = (debouncedValue.length === 0)
        ? "https://unsplash-challenge.herokuapp.com/api/images"
        : `https://unsplash-challenge.herokuapp.com/api/images/${debouncedValue}`
        
        const res = await fetch(url);
        const data:ImageResponse[] = await res.json();
        setData(data);
        setLoading(false)
    };

    useEffect(() => {
        //hacer busqueda y mandar los resultados al main mediante el context
        fetching();
    }, [debouncedValue])

    return (
        <>
            {
                (modal) && <Modal/>
            }
            <header>
                <div className="container_logo_input">
                    <img src={logo} alt={logo} className="logo" />

                    <div className="container_input">
                        <img src={lupa} alt={lupa} />
                        <input
                            type="text"
                            name="term"
                            placeholder="Search by name"
                            onChange={onChange}
                            value={term}
                        />
                    </div>
                </div>

                <button className="btn_search" onClick={handleClick}>Add a photo</button>
            </header>
        </>
    )
}

export default index
