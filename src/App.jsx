import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactList from "./components/ContactList/ContactList";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Contact List</h1>
      </header>
      <Switch>
        <Route path="/" exact component={ContactList} />
        <Route path="/add" exact component={AddContact} />
        <Route path="/edit" exact component={EditContact} />
        <Route path="/detail" exact component={ContactDetail} />
      </Switch>
    </div>
  );
};

export default App;
