import "./App.css";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./component/chat/Chat";
import Login from "./component/login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Router path="/">
                  <h1>welcome</h1>
                </Router>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
