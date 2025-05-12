"use client";

import { useState } from "react";
import { Alert } from "~/components/Alert";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";

const AddContactPage = () => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [error, setError] = useState(``);
  const [success, setSuccess] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setSuccess(``);
      return setError(`You must enter a name and email before saving!`);
    }
    let contacts = JSON.parse(localStorage.getItem(`contacts`)) || [];
    contacts.push({ name, email });
    setError(``);
    setName(``);
    setEmail(``);
    setSuccess(`Contact has been saved!`);
    localStorage.setItem(`contacts`, JSON.stringify(contacts));
  };

  return (
    <>
      <h1>Add a Contact</h1>
      {error && <Alert color="error">{error}</Alert>}
      {success && <Alert color="success">{success}</Alert>}
      <div>
        <Input
          name="name"
          label="Contact Name:"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="email"
          label="Contact Email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <Button onClick={(e) => handleSubmit(e)}>Save</Button>
        </div>
      </div>
    </>
  );
};

export default AddContactPage;
