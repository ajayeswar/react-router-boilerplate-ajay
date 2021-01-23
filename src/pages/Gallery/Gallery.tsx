import React, { Component } from 'react';

import { getImagesAction } from './store/actions';
import { GalleryImageInterface } from './store/state';
import Image from '../../components/Image/Image';
import connect from '../../services/redux/connect';

interface GalleryProps {
    images: GalleryImageInterface[]

    getImagesAction: () => void
}

@connect(
    (state) => ({
        images: state.Gallery.images
    }),
    (dispatch: (arg0: (dispatch: () => any) => Promise<any>) => any) => ({
        getImagesAction: () => dispatch(getImagesAction()),
    })
)
class Gallery extends Component<GalleryProps> {
    componentDidMount() {
        let { getImagesAction } = this.props;

        getImagesAction();
    }

    render() {
        let { images } = this.props;

        return (
            <React.Fragment>
                <h1>GALLERY</h1>
                <div className="flex">
                    {images && images.map((img: GalleryImageInterface) => <Image key={img.id} src={img.urls.small} />)}
                </div>
            </React.Fragment>)
    }
}

export default Gallery;