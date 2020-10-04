import { Container } from "@material-ui/core";
import MainComponent from "components";
import LoginContainer from "containers/login/loginContainer";
import { ifElseByCondition } from "helpers/Function";
import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { Switch, Route, useLocation } from "react-router-dom";

const LayoutContainer: FunctionComponent = () => {
  const { pathname } = useLocation();

  const [showSubMenu, setShowSubMenu] = useState<boolean>(true);

  useEffect(() => {
    setShowSubMenu(true);
  }, [pathname]);

  return (
    <Container disableGutters maxWidth={false}>
      <Switch>
        {[
          {
            path: "/signIn",
            exact: false,
            showSubMenu: false && pathname.startsWith("/storage"),
            SubMenuContent: () => null,
            Content: () => <LoginContainer />,
          },
          {
            path: ["", "/"],
            exact: true,
            showSubMenu: showSubMenu && /^\/?$/.test(pathname) && false,
            SubMenuContent: () => null,
            Content: () => <MainComponent />,
          },
        ].map(
          ({
            path,
            exact,
            showSubMenu: condition,
            SubMenuContent,
            Content,
          }) => (
            <Route
              key={`content-area-${
                typeof path === "string" ? path : path.slice(-1)
              }`}
              exact={exact}
              path={path}
            >
              {ifElseByCondition<ReactNode>(condition)(
                <Container maxWidth={false}>
                  <SubMenuContent />
                </Container>
              )(null)}
              <div>
                <Content />
              </div>
            </Route>
          )
        )}
        <Route path="*">
          <div />
        </Route>
      </Switch>
    </Container>
  );
};

export default LayoutContainer;
