import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoute";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../hooks/providers/LoginUserProvider";

export const Router: FC = () => {
  return (
  <Switch>
    <LoginUserProvider>
      <Route exact path="/">
        <Login />
      </Route>

      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map(route => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {/* <HeaderLayout>{route.children}</HeaderLayout> */}
            <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
    </LoginUserProvider>
      <Route path="*">
        <Page404 />
      </Route>
  </Switch>
  
  );
}
