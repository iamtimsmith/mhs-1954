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

const AddContact = () => {
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
		let contacts = JSON.parse(localStorage.getItem(`contacts`));
		contacts.push({name, email});
		setError(``);
		setName(``);
		setEmail(``);
		setSuccess(`Contact has been saved!`);
		localStorage.setItem(`contacts`, JSON.stringify(contacts));
	}

	return (
		<Section>
			<h1>Add a Contact</h1>
			{error && <Alert type='error'>{error}</Alert>}
			{success && <Alert type='success'>{success}</Alert>}
			<div>
				<Field>
					<label htmlFor="name">Contact Name: </label>
					<input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
				</Field>
				<Field>
					<label htmlFor="email">Contact Email: </label>
					<input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
				</Field>
				<Field>
					<Button onClick={e => handleSubmit(e)}>Save</Button>
				</Field>
			</div>
		</Section>
	);
}

export default AddContact;
