import axios from 'axios';
const BASE_URL = 'https://data.cityofnewyork.us/resource/9w7m-hzhe.json/';

const fetchRestaurants = async () => {
  try {
    const resp = await axios(`${BASE_URL}`)
    console.log(resp);
    return resp.data;
  } catch(e) {
    console.log('got a problem: ', e);
    return [];
  }
}
export { fetchRestaurants }
