import { actions } from './store';
import { API } from '../../../services/api/api';


export const getBotDetialsAction = () => async (dispatch) => 
    { try{
        const { getBotDetials } = actions;

        return API.fetchBotAdmin().then((data)=> dispatch(getBotDetials(data)))
        }
    catch (e) {
        return console.error(e.message);
    }
}