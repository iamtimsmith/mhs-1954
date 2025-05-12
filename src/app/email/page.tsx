"use client";

import { useEffect, useState } from "react";
import { Alert } from "~/components/Alert";
import { Button } from "~/components/Button";
import { Dialog } from "~/components/Dialog";
import { Input } from "~/components/Input";

const EmailPage = () => {
  const [subject, setSubject] = useState(``);
  const [body, setBody] = useState(``);
  const [success, setSuccess] = useState(``);
  const [error, setError] = useState(``);
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState(``);
  const [name, setName] = useState(``);
  const [pass, setPass] = useState(``);

  const handleSend = async (e) => {
    e.preventDefault();
    const contacts = JSON.parse(localStorage.getItem(`contacts`));
    const user = JSON.parse(localStorage.getItem(`user`));
    if (!contacts || contacts.length < 1)
      setError(
        `You don't have any recipients. Please add some before sending your email`
      );
    if (!user)
      setError(
        `You haven't added your information. You need to add this so the recipients know who sent it.`
      );
    if (!user.name)
      setError(
        `You haven't added your name. You need to add this so the recipients know who sent it.`
      );
    if (!user.email)
      setError(
        `You haven't added your email address. You need to add this so the recipients know who to reply to.`
      );
    const req = await fetch(`/api/email`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contacts, name, email, pass, subject, body }),
    });
    const res = await req.json();
    setModal(false);
    if ("error" in res)
      return setError(
        `There was an error sending your email. Please try again later.`
      );
    setSubject(``);
    setBody(``);
    setSuccess(`Your email was sent!`);
  };

  const showModal = () => {
    if (!subject || !body)
      return setError(`You need a subject and body before sending.`);
    setModal(true);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(`user`));
    if (!user) {
      setError(
        `You haven't added your information. You need to add this so the recipients know who sent it.`
      );
    } else {
      setEmail(user.email);
      setName(user.name);
    }
  }, []);

  return (
    <>
      <h1>Email</h1>
      {error && <Alert color="error">{error}</Alert>}
      {success && <Alert color="success">{success}</Alert>}
      <Input
        label="Subject:"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      {/* Update this to use React Quill */}
      <Input
        label="Body:"
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div>
        <Button onClick={() => showModal()}>Send</Button>
      </div>
      <Dialog open={modal} onClose={() => setModal(false)} modal>
        <small style={{ marginBottom: 20 }}>
          Before sending the email, you need to enter your email address and
          password. Don't worry. Your password isn't being stored anywhere. It
          will disappear as soon as the email is sent!
        </small>
        <Input
          label="Email:"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password:"
          name="password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <div>
          <Button onClick={(e) => handleSend(e)}>Send</Button>
        </div>
      </Dialog>
    </>
  );
};

export default EmailPage;
