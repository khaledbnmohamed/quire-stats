import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import Cookies from "js-cookie";
import { QUIRE_ACCESS_TOKEN } from "../../config";
import {userAccessToken} from "../../actions/requests";


const LoginCallback = () => {
  const history = useHistory();

  useEffect(() => {
    async function getUserToken()  {
      const url = window.location.search;
      const callbackParams = queryString.parse(url);
      const response = await userAccessToken({code: callbackParams["code"]})
      Cookies.set(QUIRE_ACCESS_TOKEN, response.data.access_token);
      history.push({ pathname: "/projects"})
    }
    getUserToken()
  }, [history]);

  return (
    <p/>
    // history.push({
    //   pathname: "/home",
    // })
  );
};

export default LoginCallback;
