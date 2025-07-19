import axios from 'axios'
import { baseUrL } from './Constants/Const';

const instance = axios.create({
  baseURL: baseUrL

});

export default instance