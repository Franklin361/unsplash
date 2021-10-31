
import logo from '../../assets/my_unsplash_logo.svg'
import lupa from '../../assets/lupa.png'

import './style.css'
import { useDebounce } from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';

import Modal from '../Modal'

const index = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [modal, setModal] = useState(false);
    const { debouncedValue } = useDebounce(searchTerm, 2000);

    const handleClick = () => {
        setModal(true)
    };

    useEffect(() => {

        //hacer busqueda y mandar los resultados al main mediante el context
        if (debouncedValue) {
            //fetching

        } else {
            //mandar todos
        }

    }, [debouncedValue])

    return (
        <>
            {
                (modal) && <Modal>
                    <h2 className="title_modal">{'Add a new photo'}</h2>

                    <div className="container_input_modal">
                        <label htmlFor="label">'Label'</label>
                        <input
                            type="text"
                            name='label'
                            id="label"
                            placeholder='Saepe est quia rerum autem incidunt'
                            required
                        />
                    </div>

                    
                        
                        <div className="container_input_modal">
                            <label htmlFor="photo">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                id="photo"
                                placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
                                required
                            />
                        </div>
                    

                    <div className="container_buttons">
                        <button type="button" className="btn_cancel" onClick={() => { setModal(false) }}>Cancel</button>
                        <button type="submit" className="btn_submit">Submit</button>
                    </div>
                </Modal>
            }
            <header>
                <div className="container_logo_input">
                    <img src={logo} alt={logo} className="logo" />

                    <div className="container_input">
                        <img src={lupa} alt={lupa} />
                        <input
                            type="text"
                            placeholder="Search by name"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <button className="btn_search" onClick={handleClick}>Add a photo</button>
            </header>
        </>
    )
}

export default index
