import { createContext, useState } from "react";

interface DataState {
    data: boolean;
    setData: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext({} as DataState);



export const DataProvider:React.FC = ({children}) => {

    const [data, setData] = useState(false)

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}


