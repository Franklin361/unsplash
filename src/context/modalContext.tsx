import { createContext, useState } from "react";

interface ModalState {
    modal:boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    idImage:string;
    setIdImage: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalContext = createContext({} as ModalState);

export const ModalProvider:React.FC = ({children}) => {

    const [modal, setModal] = useState(false);
    const [idImage, setIdImage] = useState("")

    return (
        <ModalContext.Provider value={{ modal, setModal,idImage, setIdImage }}>
            {children}
        </ModalContext.Provider>
    )
}


