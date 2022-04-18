import logo from './logo.svg';
import './App.css';
import './components/OnlineStore';
import './components/SignUp';
import './components/Event';
import './components/Invite';
import './components/YourSecrect';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div class="home">
            <Home />
          </div>
        </Route>
        <Route exact path="/onlineStore">
          <OnlineStore />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/event">
          <Event />
        </Route>
        <Route exact path="/invite">
          <Invite />
        </Route>
        <Route exact path="/yourSecret">
          <YourSecrect />
        </Route>
      </Switch>
    </div>
  );
}


export default App