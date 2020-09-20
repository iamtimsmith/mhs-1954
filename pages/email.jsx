import React, {useState} from 'react';
import styled from 'styled-components';

const Section = styled.section`
	${props => props.theme.container}
`;

const Alert = styled.div`
	padding: 15px;
	background: ${props => props.type === `error` ? `rgba(255,0,0,0.2)` : `rgba(34,139,34,0.2)`};
	color: ${props => props.type === `error` ? props.theme.primary : `#006400`};
	margin-bottom: 15px;
`;

const Field = styled.div`
	margin-bottom: 30px;
`;

const Button = styled.button`
	${props => props.theme.button}
`;

const EmailPage = () => {
	const [subject, setSubject] = useState(``);
	const [body, setBody] = useState(``);
	const [success, setSuccess] = useState(``);
	const [error, setError] = useState(``);

	const handleSend = e => {
		e.preventDefault();
		const contacts = JSON.parse(localStorage.getItem(`contacts`));
		const user = JSON.parse(localStorage.getItem(`user`));
		if (!contacts || contacts.length < 1) setError(`You don't have any recipients. Please add some before sending your email`);
		if (!user) setError(`You haven't added your information. You need to add this so the recipients know who sent it.`);
		if (!user.name) setError(`You haven't added your name. You need to add this so the recipients know who sent it.`);
		if (!user.email) setError(`You haven't added your email address. You need to add this so the recipients know who to reply to.`);
	}

	return (
		<Section>
			<h1>Email</h1>
			{error && <Alert type='error'>{error}</Alert>}
			{success && <Alert type='success'>{success}</Alert>}
			<Field>
				<label htmlFor="subject">Subject:</label>
				<input type="text" name='subject' value={subject} onChange={e => setSubject(e.target.value)} />
			</Field>
			<Field>
				<label htmlFor="body">Body:</label>
				<textarea type="text" name='body' value={body} onChange={e => setBody(e.target.value)} />
			</Field>
			<Field>
				<Button onClick={e => handleSend(e)}>Send</Button>
			</Field>
		</Section>
	);
}

export default EmailPage;
