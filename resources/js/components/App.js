import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Posts from "./pages/Posts";

function App() {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/posts" component={Posts} />
            </Switch>
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById("app")
    );
}
