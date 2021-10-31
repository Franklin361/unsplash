import React from 'react'
import { ImageThumbnail } from './ImageThumbnail';

interface Props {
    arr: string[],
    onClick:React.Dispatch<React.SetStateAction<boolean>>
}

export const LayaoutImages = React.memo(({ arr,onClick }: Props) => {

    return (
        <>
            {
                (arr.length === 0) ? null : arr.map(img => (<ImageThumbnail key={img} src={img} onClick={onClick}/> ))
            }
        </>
    )
})
