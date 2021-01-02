import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { callBackUrl } from "../../config";

// Lazy loaded Pages
const LoginCallback = lazy(() => import("./LoginCallback"));
const Home = lazy(() => import("./Home"));
const AllTasks = lazy(() => import("./AllTasks"));
const LandingPage = lazy(() => import("../LandingPage"));
const ProjectListing = lazy(() => import("./ProjectListing"));

const GuestLayout = () => (
  <Suspense fallback={"loading"}>
    <Switch>
    <Route exact path={`/`} component={LandingPage} />
     <Route exact path={`/${callBackUrl}`} component={LoginCallback} />
      <Route exact path={`/home`} component={Home} />
      <Route exact path={`/tasks`} component={AllTasks} />
      <Route exact path={`/projects`} component={ProjectListing} />

    </Switch>
  </Suspense>
);

export default GuestLayout;
