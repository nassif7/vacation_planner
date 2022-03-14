import axios from 'axios'
import { json } from 'stream/consumers'
import api from './consts'

const query = async (path: string, callBack: (data: any) => void) => {
  try {
    const response = await fetch('http://localhost:5001/employees')
    const jsonData = await response.json()

    callBack(jsonData)
  } catch (error: any) {
    console.log('here', error.message)
  }
}

export default query
