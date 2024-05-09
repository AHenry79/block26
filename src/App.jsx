import ContactList from "./components/ContactList";
import { useState } from "react";
import "./App.css";
import SelectedContact from "./components/SelectedContact";
export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contactDet, setContact] = useState({});
  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          setSelectedContactId={setSelectedContactId}
          setContact={setContact}
        />
      ) : (
        <ContactList
          setSelectedContactId={setSelectedContactId}
          setContact={setContact}
        />
      )}
    </>
  );
}
