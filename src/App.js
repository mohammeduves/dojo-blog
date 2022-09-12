import Navbar from "./Navbar";
import Home from "./Home";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import NotFound from "./NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar></Navbar>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home> </Home>
              </Route>
              <Route exact path="/create">
                <Create></Create>
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails></BlogDetails>
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
