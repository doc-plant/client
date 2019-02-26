import axios from 'axios'

export const local = axios.create({
  baseURL: 'http://192.168.0.20:3000'
})