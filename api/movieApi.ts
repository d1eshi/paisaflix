import axios from 'axios'

const movieApi = axios.create({
  baseURL: 'https://paisa-challange.herokuapp.com/api/v1/paisaflix',
})

export default movieApi
