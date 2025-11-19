import Layout from "@/app/components/Layout";
import Main from "@/app/routes/main";
import Mod from "@/app/routes/mod";
import { Route, Switch } from "wouter";

export default () => (
  <Layout>
    <Switch>
      <Route
        path="/"
        component={Main}
      />
      <Route path="/mod/:local_path">{(params) => <Mod local_path={params.local_path} />}</Route>
    </Switch>
  </Layout>
);
