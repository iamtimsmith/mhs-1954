import React, {useState, useEffect} from 'react';
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

const Clear = styled.button`
	${props => props.theme.button}
	background: none !important;
	color: ${props => props.theme.primary};
	margin: 0 20px;
`;

const MyInformationPage = () => {
	const [name, setName] = useState(``);
	const [email, setEmail] = useState(``);
	const [error, setError] = useState(``);
	const [success, setSuccess] = useState(``);

	const handleSubmit = e => {
		e.preventDefault();
		if (!name || !email) {
			setSuccess(``);
			return setError(`You must enter a name and email before saving!`);
		}
		const data = {name, email};
		localStorage.setItem(`user`, JSON.stringify(data));
		setError(``);
		setSuccess(`Contact has been saved!`);
	}

	const handleClear = e => {
		e.preventDefault();
		localStorage.removeItem(`user`);
		setName(``);
		setEmail(``);
		setError(``);
		setSuccess(`Your profile was successfully cleared.`);
	}

	useEffect(() => {
		const json = JSON.parse(localStorage.getItem(`user`));
		if (json) {
			setName(json.name);
			setEmail(json.email);
		}
	}, []);

	return (
		<Section>
			<h1>Profile</h1>
			{error && <Alert type='error'>{error}</Alert>}
			{success && <Alert type='success'>{success}</Alert>}
			<Field>
				<label htmlFor="name">Your Name:</label>
				<input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
			</Field>
			<Field>
				<label htmlFor="email">Your Email:</label>
				<input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
			</Field>
			<Field>
				<Button onClick={e => handleSubmit(e)}>Save</Button>
				<Clear onClick={e => handleClear(e)}>Clear</Clear>
			</Field>
		</Section>
	);
};

export default MyInformationPage;
