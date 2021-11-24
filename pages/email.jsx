import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Modal from "../components/modal/modal";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Section = styled.section`
	${(props) => props.theme.container}
`;

const Alert = styled.div`
	padding: 15px;
	background: ${(props) =>
		props.type === `error` ? `rgba(255,0,0,0.2)` : `rgba(34,139,34,0.2)`};
	color: ${(props) =>
		props.type === `error` ? props.theme.primary : `#006400`};
	margin-bottom: 15px;
`;

const Field = styled.div`
	margin-bottom: 30px;
	width: 100%;
`;

const Button = styled.button`
	${(props) => props.theme.button}
`;

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
		<React.Fragment>
			<Section>
				<h1>Email</h1>
				{error && <Alert type="error">{error}</Alert>}
				{success && <Alert type="success">{success}</Alert>}
				<Field>
					<label htmlFor="subject">Subject:</label>
					<input
						type="text"
						name="subject"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>
				</Field>
				<Field>
					<label htmlFor="body">Body:</label>
					<ReactQuill theme="snow" value={body} onChange={setBody} />
				</Field>
				<Field>
					<Button onClick={() => showModal()}>Send</Button>
				</Field>
			</Section>

			<Modal show={modal} setShow={setModal}>
				<small style={{ marginBottom: 20 }}>
					Before sending the email, you need to enter your email address and
					password. Don't worry. Your password isn't being stored anywhere. It
					will disappear as soon as the email is sent!
				</small>
				<Field>
					<label htmlFor="email">Email:</label>
					<input
						type="text"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Field>
				<Field>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						value={pass}
						onChange={(e) => setPass(e.target.value)}
					/>
				</Field>
				<Field>
					<Button onClick={(e) => handleSend(e)}>Send</Button>
				</Field>
			</Modal>
		</React.Fragment>
	);
};

export default EmailPage;
