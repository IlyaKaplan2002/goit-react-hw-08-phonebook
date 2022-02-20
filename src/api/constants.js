import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const _axios = axios.create({ baseURL: BASE_URL });

export default _axios;
