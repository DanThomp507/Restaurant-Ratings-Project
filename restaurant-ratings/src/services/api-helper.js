import axios from 'axios';

const BASE_URL = 'https://data.cityofnewyork.us/resource/9w7m-hzhe.json';
const YELP_URL = 'https://api.yelp.com/v3/businesses/search';


const fetchRestaurants = async (search) => {
  try {
    const resp = await axios(`${BASE_URL}?$q=${search}`)
    return resp.data;
  }
    catch(e) {
    console.log('got a problem: ', e);
  }
}

const fetchChartData = async (search) => {
  try {
    const resp = await axios(`${BASE_URL}?$q=${search}`)
    console.log(resp)
    return resp.data;
  }
  catch(e) {
  console.log('got a problem: ', e);
  }
}
const fetchYelpData = async (search) => {
  try {
    const resp = await axios(`${YELP_URL}/${search}`)
    console.log(resp)
    return resp.data;
  }
  catch(e) {
  console.log('got a problem: ', e);
  }
}
export { fetchRestaurants, fetchChartData, fetchYelpData }
