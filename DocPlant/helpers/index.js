import axios from 'axios'

export const local = axios.create({
  baseURL: 'http://172.16.0.162:3000'
})