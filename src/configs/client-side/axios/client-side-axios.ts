import axios from 'axios'

const clientAxiosInstance = axios.create({
  headers: {
    contentType: 'application/json',
  },
})

export default clientAxiosInstance
