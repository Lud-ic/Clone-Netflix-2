import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Description } from "./pages/Description";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/description/:id" component={Description} />
        <Route path="*">
          {() =>  window.open(process.env.REACT_APP_HOST, "_self")}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { Router };
