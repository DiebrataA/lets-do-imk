import axios from 'axios';
import {BASE_API} from '../Constant';

const requestGetAPI = async (path, token) => {
  console.log('GET ' + path);
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      'access-control-allow-origin': '*',
    },
  };
  let res = await axios.get(BASE_API + path, header);
  return res.data;
};

const requestPutAPI = async (path, token, payload) => {
  console.log('PUT ' + path);
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      'access-control-allow-origin': '*',
    },
  };
  let res = await axios.put(BASE_API + path, payload, header);
  return res.data;
};

export {requestGetAPI, requestPutAPI};
