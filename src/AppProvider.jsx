import React, { useContext, useEffect, useReducer } from "react";

const contactsContext = React.createContext();
const contactsContextDispatcher = React.createContext();

const initialState = JSON.parse(localStorage.getItem("Contacts")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const allContacts = [...state];
      const contactData = {
        id: Date.now(),
        name: action.name,
        phone: action.phone,
        desc: action.desc,
      };
      allContacts.push(contactData);
      return allContacts;
    }
    case "delete": {
      const filtredContacts = state.filter((c) => c.id !== action.id);
      return filtredContacts;
    }
    case "edit": {
      const allContacts = [...state];
      const index = allContacts.findIndex((c) => c.id === action.id);
      const selectedContact = allContacts.find((c) => c.id === action.id);
      selectedContact.name = action.name;
      selectedContact.phone = action.phone;
      selectedContact.desc = action.desc;
      allContacts[index] = selectedContact;
      return allContacts;
    }

    default:
      break;
  }
};

const AppProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <contactsContext.Provider value={contacts}>
      <contactsContextDispatcher.Provider value={dispatch}>
        {children}
      </contactsContextDispatcher.Provider>
    </contactsContext.Provider>
  );
};

export default AppProvider;
export const useContacts = () => useContext(contactsContext);
export const useContactsActions = () => useContext(contactsContextDispatcher);
