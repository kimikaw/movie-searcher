import axios from 'axios'

import { baseURL, api_key } from './utils/apiConfig'

const instance = axios.create({
  baseURL,
  params: { api_key },
})

export default instance
