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
          <h1>Pagina não encontrada</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { Router };
