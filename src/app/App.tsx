import Main from "@/app/routes/main";
import { Route, Switch } from "wouter";

export default () => (
  <Switch>
    <Route
      path="/"
      component={Main}
    />
  </Switch>
);
