import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { callBackUrl } from "../../config";

// Lazy loaded Pages
const LoginCallback = lazy(() => import("./LoginCallback"));
const Home = lazy(() => import("./Home"));

const GuestLayout = () => (
  <Suspense fallback={"loading"}>
    <Switch>
     <Route exact path={`/${callBackUrl}`} component={LoginCallback} />
      <Route exact path={`/home`} component={Home} />
    </Switch>
  </Suspense>
);

export default GuestLayout;
