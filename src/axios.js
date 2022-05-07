import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

const url = 'http://localhost:9000'
export const getUser = async data => {
  return await axios.post(`${url}/loginUser`)
}

export const addUser = async data => {
  return await axios.post(`${url}/signinUser`, data)
}
export default instance
