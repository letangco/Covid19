import axios from 'axios';
const KEY = 'AIzaSyAAji08D-qvQDAreTvqrv7pz_UHOJFz2gA'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 3,
        key: KEY,
        q: 'covid'
    }
})