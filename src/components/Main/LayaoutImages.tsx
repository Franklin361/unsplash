import React from 'react'
import { ImageResponse } from '../../interfaces/image';
import { ImageThumbnail } from './ImageThumbnail';
import Masonry from 'react-masonry-css'

import nodata from '../../assets/nodata.gif'

interface Props {
    arr: ImageResponse[];
    setIdImage: React.Dispatch<React.SetStateAction<string>>;
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const LayaoutImages = React.memo(({ arr, ...rest }: Props) => {

    return (
        <Masonry breakpointCols={{
            default: 3,
            700: 2,
            500: 1
        }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {
                (!(arr.length === 0))
                    ? arr.map(img => (<ImageThumbnail key={img.id} {...img} {...rest} />))
                    : <div className="container_nodata">
                        <div>
                            <img src={nodata} alt={nodata} />
                        </div>
                        <span>No Images</span>
                    </div>
            }
        </Masonry>
    )
})
