import axios from 'axios'

export const local = axios.create({
  baseURL: 'http://172.20.10.2:3000'
})