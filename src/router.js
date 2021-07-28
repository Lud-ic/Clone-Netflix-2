import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Description } from "./pages/Description";
import { Search } from "./pages/Search";

import { Redirect } from "react-router";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/description/:id" component={Description} />
                <Route exact path="/search" component={Search} />
                <Route path="*">
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export { Router };
