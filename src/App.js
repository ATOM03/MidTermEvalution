import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Temp from "./Components/FormCreation/Temp";
import Login from "./Components/FormCreation/Login/Login";
import Register from "./Components/FormCreation/register/Register";
import { Provider } from "react-redux";
import store from "./Components/FormCreation/Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/form" component={Temp} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
