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


export const getTasksOfProject = async (pathParams) => {
  const url = getApiUrl({ endpoint: "tasks_of_project", pathParams});
  const headers = {
    Authorization: 'Bearer ' + Cookies.get(QUIRE_ACCESS_TOKEN),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  const response = await axios.get(url, { headers,withCredentials: true, crossDomain: true })
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};


