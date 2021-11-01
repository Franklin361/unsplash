
import './style.css'
import { useContext, useState } from 'react';
import { ModalContext } from '../../context/modalContext';
import { ImageResponse } from '../../interfaces/image';
import { DataContext } from '../../context/dataContext';
import { useForm } from '../../hooks/useForm';


const index: React.FC = () => {

    const { setModal, idImage, setIdImage } = useContext(ModalContext);
    const { setData } = useContext(DataContext);
    const { form, onChange, url, label } = useForm({ url:'', label: '' });

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(!idImage){
            
            const opt:RequestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }
            const request = await fetch('https://unsplash-challenge.herokuapp.com/api/image',opt);
            const response: ImageResponse = await request.json();
            setData((data)=> [response,...data]);

        }else{

            const request = await fetch(`https://unsplash-challenge.herokuapp.com/api/image/${idImage}`,{ method:'DELETE'});
            if(request.status === 204){
                setData( (data)=> data.filter( img => img.id !== idImage ));
            }
        }

        setModal(false);
        setIdImage("");
    };

    return (
        <div className="overlay_background">
            <form className="container_modal" onSubmit={handleSubmit}>
                <h2 className="title_modal">{(idImage) ? 'Are you sure?' : 'Add a new photo'}</h2>

                <div className="container_input_modal">
                    <label htmlFor="label"> {(idImage) ? 'Password' : 'Label'} </label>
                    <input
                        type={(idImage) ? 'password' : 'text'}
                        name='label'
                        id="label"
                        placeholder={(idImage) ? '***************' : 'Saepe est quia rerum autem incidunt'}
                        required
                        onChange={onChange}
                        value={label}
                    />
                </div>

                {
                    (!idImage) &&
                    <div className="container_input_modal">
                        <label htmlFor="photo">Photo URL</label>
                        <input
                            type="url"
                            name="url"
                            id="photo"
                            placeholder="https://images.unsplash.com/photo-1584395630827..."
                            required
                            onChange={onChange}
                            value={url}
                        />
                    </div>
                }


                <div className="container_buttons">
                    <button type="button" className="btn_cancel" onClick={() => {setModal(false);setIdImage("")}}>Cancel</button>
                    <button 
                        type="submit" 
                        className={`btn_submit ${ (idImage) && 'delete' }`}
                    >
                        {(idImage) ? 'Delete' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default index
