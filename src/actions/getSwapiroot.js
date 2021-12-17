import axios from "axios";

export const getSwapiRoot = () => axios.get("https://www.swapi.tech/api/")
    .then((res) => {
      const { data, status } = res;
      if (status !== 200) throw new Error("Failed to get");
      return data.result
    })
    .catch((error) => {
      console.error(error);
      return {};
    });
