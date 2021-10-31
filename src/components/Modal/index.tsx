
import './style.css'
import { useEffect } from 'react';

const existId =false;



const index:React.FC = ({children}) => {


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // setModal(false)
    };


    return (
        <div className="overlay_background">
            <form className="container_modal" onSubmit={handleSubmit}>
                {children}
            </form>
        </div>
    )
}

export default index
