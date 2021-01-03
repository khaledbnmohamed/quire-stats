import axios from "axios";
import Cookies from "js-cookie";
import { getApiUrl, QUIRE_ACCESS_TOKEN } from "../config";


export const getCompletedTasks = async (queryParams) => {
  queryParams = {...queryParams, user_token: Cookies.get(QUIRE_ACCESS_TOKEN) }

  const url = getApiUrl({ endpoint: "daily_overview", queryParams});
  const response = await axios.get(url)
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};


