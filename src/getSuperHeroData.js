import axios from 'axios';

const getData = async () => {
  const res = await axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`);
  return res.data;
}

export default getData;