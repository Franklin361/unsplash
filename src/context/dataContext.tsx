import { createContext, useState } from "react";
import { ImageResponse } from '../interfaces/image';

interface DataState {
    data: ImageResponse[];
    setData: React.Dispatch<React.SetStateAction<ImageResponse[]>>;
    loading:boolean; 
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DataContext = createContext({} as DataState);

export const DataProvider:React.FC = ({children}) => {

    const [data, setData] = useState<ImageResponse[]>([]);
    const [loading, setLoading] = useState(true);

    return (
        <DataContext.Provider value={{ data, setData,loading, setLoading }}>
            {children}
        </DataContext.Provider>
    )
}


