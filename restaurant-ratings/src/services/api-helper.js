import axios from 'axios';

const BASE_URL = 'https://data.cityofnewyork.us/resource/9w7m-hzhe.json';


const fetchRestaurants = async (search) => {
  try {
    const resp = await axios(`${BASE_URL}?$q=${search}`)
    return resp.data;
  }
    catch(e) {
    console.log('got a problem: ', e);
  }
}
export default fetchRestaurants;
