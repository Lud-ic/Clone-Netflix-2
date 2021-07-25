import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Description } from "./pages/Description";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/description" component={Description} />
        <Route path="*">
          {() =>  window.open("http://localhost:3000/", "_self")}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { Router };
