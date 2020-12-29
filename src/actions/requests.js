import axios from "axios";
import Cookies from "js-cookie";
import { getApiUrl, MRN_JWT_COOKIE } from "../config";


export const submitCompanyProfile = async (formDetails) => {
  const url = getApiUrl({ endpoint: "complete_profile" });
  const headers = {
    Authorization: Cookies.get(MRN_JWT_COOKIE),
  };

  const response = await axios.post(url, formDetails, { headers })
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};

export const showCompany = async (pathParams) => {
  const url = getApiUrl({ endpoint: "company_show", pathParams });
  const headers = {
    Authorization: Cookies.get(MRN_JWT_COOKIE),
  };
  const response = await axios.get(url, { headers })
    .then((res) => ({ data: res.data }))
    .catch((error) => ({ data: error, hasError: true }));
  return response;
};
