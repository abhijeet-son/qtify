
import axios from 'axios';

const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

export const fetchAllSongs = async () => {
    try{

        const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return response.data;

    }catch(error){
        console.log(error)
    }
}