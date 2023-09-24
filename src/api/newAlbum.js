import axios from 'axios';

const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

export const fetchNewAlbums = async () => {
    try{

        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return response.data;

    }catch(error){
        console.log(error)
    }
}