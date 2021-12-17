import axios from "axios";

export const getResource = (url) =>
  axios
    .get(url)
    .then((res) => {
      const { data, status } = res;
      if(status === 404) throw new Error("Not Found");
      if (status !== 200) throw new Error("Failed to get");
      return data.result
    })
    .catch((error) => {
      console.error(error);
      return "Not Found";
    });
