import axios from "axios";
import { getApiUrl } from "../config";


export const getUserProjects = async (queryParams) => {
  const url = getApiUrl({ endpoint: "projects", queryParams});
  const response = await axios.get(url)
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};


