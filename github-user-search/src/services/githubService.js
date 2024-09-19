import axios from 'axios';

const fetchUserData = async (searchTerm) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${searchTerm}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error while fetching:', error);
  }
};

export default fetchUserData;
