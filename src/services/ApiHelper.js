import axios from 'axios';
import {BASE_API} from '../Constant';

const requestGetAPI = async (path, token) => {
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      'access-control-allow-origin': '*',
    },
  };
  let res = await axios.get(BASE_API + path, header);
  return res.data;
};

export {requestGetAPI};
