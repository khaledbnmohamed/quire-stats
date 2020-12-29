import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import Cookies from "js-cookie";
import { QUIRE_AUTHORIZATION_CODE } from "../../config";

const LoginCallback = () => {
  const history = useHistory();

  useEffect(() => {
    const url = window.location.search;
    const callbackParams = queryString.parse(url);
    Cookies.set(QUIRE_AUTHORIZATION_CODE, callbackParams["code"]);

    return (
      history.push({
        pathname: "/home",
      })
    );
  }, [history]);

  return (
    <p />
  );
};

export default LoginCallback;
