import axios from "axios";

const fetchUserData = async (searchTerm, value) => {
  switch (value) {
    case "username":
      try {
        const response = await axios.get(
          `https://api.github.com/users/${searchTerm}`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        return "Error while fetching";
      }

    case "location":
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${searchTerm}`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        return "Error while fetching";
      }

    case "minRepos":
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${searchTerm}`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        return "Error while fetching";
      }

    default:
      break;
  }
};

export default fetchUserData;
