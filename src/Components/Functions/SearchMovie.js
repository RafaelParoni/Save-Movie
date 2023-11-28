import axios from 'axios';

import { OMDB_API_URL } from './keys/importKey.js';

const api = axios.create({
    baseURL: OMDB_API_URL
})

export default api;