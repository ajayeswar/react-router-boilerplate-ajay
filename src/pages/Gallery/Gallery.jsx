import React, {Component} from 'react';
import { connect } from "react-redux";

import {getImagesAction} from './Gallery.store';
import { API } from '../../services/api/api';
import Image from '../../components/Image/Image';

class Gallery extends Component {
    constructor(props){
        super(props);

        this.state={};
    }

    componentDidMount(){
        let { getImagesAction } = this.props;

        getImagesAction();
    }

    render(){
        let { images } = this.props;

        return (
        <React.Fragment>
            <h1>GALLERY</h1>
            <div className="flex">
                {images && images.map((img)=> <Image key={img.id} src={img.urls.small} />)}
            </div>
        </React.Fragment>)
    }
}

const mapStateToProps = state => ({
    images: state.Gallery.images
});

const mapDispatchToProps = (dispatch) => ({
    getImagesAction: () => dispatch(getImagesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);