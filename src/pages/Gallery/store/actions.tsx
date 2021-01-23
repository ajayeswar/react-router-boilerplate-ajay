import { actions } from './store';
import { API } from '../../../services/api/api';


export const getImagesAction = () => async (dispatch: (arg0: { payload: any; type: string; }) => any) => {
    const { getImages } = actions;
    try {
        return API.unsplashAPI(1).then((data) => dispatch(getImages(data)))
    }
    catch (e) {
        return console.error(e.message);
    }
}