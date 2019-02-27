import axios from 'axios'

export const local = axios.create({
  baseURL: 'http://35.247.145.146/'
})