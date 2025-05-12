"use client";

import { useEffect, useState } from "react";
import { Alert } from "~/components/Alert";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";

const ProfilePage = () => {
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
    const data = { name, email };
    localStorage.setItem(`user`, JSON.stringify(data));
    setError(``);
    setSuccess(`Contact has been saved!`);
  };

  const handleClear = (e) => {
    e.preventDefault();
    localStorage.removeItem(`user`);
    setName(``);
    setEmail(``);
    setError(``);
    setSuccess(`Your profile was successfully cleared.`);
  };

  useEffect(() => {
    const json = JSON.parse(localStorage.getItem(`user`));
    if (json) {
      setName(json.name);
      setEmail(json.email);
    }
  }, []);

  return (
    <>
      <h1>Profile</h1>
      {error && <Alert color="error">{error}</Alert>}
      {success && <Alert color="success">{success}</Alert>}
      <Input
        label="Your Name:"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Your Email:"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Save
        </Button>
        <Button variant="secondary" onClick={(e) => handleClear(e)}>
          Clear
        </Button>
      </div>
    </>
  );
};

export default ProfilePage;
