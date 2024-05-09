import { useEffect } from "react";
import { useState } from "react";

export default function SelectedContact() {
  const [contactDet, setContact] = useState({});
  useEffect(() => {
    async function getContactId() {
      const response = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/1`
      );
      const result = await response.json();
      setContact(result.id);
      console.log(contactDet);
    }
    getContactId();
  }, []);
}
