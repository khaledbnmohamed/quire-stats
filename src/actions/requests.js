import axios from "axios";
import Cookies from "js-cookie";
import { getApiUrl,backendBaseUrl, QUIRE_ACCESS_TOKEN } from "../config";


export const userAccessToken = async (queryParams) => {
  const url = getApiUrl({ endpoint: "retreive_token",queryParams, baseUrl: backendBaseUrl });
  const headers = {
    Authorization: Cookies.get(QUIRE_ACCESS_TOKEN),
  };

  const response = await axios.get(url, { headers })
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};


export const getTasksOfProject = async (queryParams) => {
  queryParams = {...queryParams, user_token: Cookies.get(QUIRE_ACCESS_TOKEN) }
  const url = getApiUrl({ endpoint: "tasks_of_project", queryParams});
  const response = await axios.get(url)
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};


