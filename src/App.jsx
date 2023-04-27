import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactList from "./components/ContactList/ContactList";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import AppProvider from "./AppProvider";

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <header>
          <h1>Contact List App</h1>
        </header>
        <Switch>
          <Route path="/" exact component={ContactList} />
          <Route path="/add" exact component={AddContact} />
          <Route path="/edit/:id" exact component={EditContact} />
          <Route path="/detail/:id" exact component={ContactDetail} />
        </Switch>
      </AppProvider>
    </div>
  );
};

export default App;
