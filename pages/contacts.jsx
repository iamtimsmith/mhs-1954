import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
	${props => props.theme.container}
`;

const Warning = styled.p`
	margin: 30px 0;
	color: rgba(0,0,0,0.5);
	text-align: center;
`;

const List = styled.ul`
	list-style: none;
	padding: 0;
	li {
		border-bottom: 1px solid rgba(0,0,0,0.1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 15px;
		p:nth-child(1) {
			font-weight: bold;
			margin-bottom: 0;
		}
		p:nth-child(2) {
			color: rgba(0,0,0,0.4);
			margin-top: 0;
		}
		button {
			${props => props.theme.button}
			padding: 0;
			background: none !important;
			color: ${props => props.theme.primary};
			font-size: 16px;
			visibility: hidden;
			opacity: 0;
		}
		&:hover {
			background: rgba(0,0,0,0.05);
			button {
				visibility: visible;
				opacity: 1;
			}
		}
	}
`;
const Delete = styled.button`
	${props => props.theme.button}
	padding: 0;
	background: none !important;
	color: ${props => props.theme.primary};
	font-size: 16px;
`;

const ContactsPage = () => {
	const [search, setSearch] = useState(``);
	const [contacts, setContacts] = useState([]);

	const handleDelete = (key) => {
		let arr = [];
		for(let i=0; i < contacts.length; i++) {
			if (i !== key) arr.push(contacts[i]);
		}
		console.log(key, arr);
		localStorage.setItem(`contacts`, JSON.stringify(arr));
		setContacts(arr);
	}

	useEffect(() => {
		const json = JSON.parse(localStorage.getItem(`contacts`));
		if (json) setContacts(json);
	}, []);

	const list = search ?
		contacts.filter(contact => {
			const s = search.toLowerCase();
			const n = contact.name.toLowerCase();
			const e = contact.email.toLowerCase();
			return n.includes(s) || e.includes(s);
		}) : contacts;

	return (
		<Section>
			<h1>Contacts</h1>
			<input type="text" placeholder='Search...' value={search} onChange={e => setSearch(e.target.value)} />
			{list.length < 1 &&
				<Warning>You haven't added any contacts yet. <Link href='/add-contact'><a>Add a contact</a></Link></Warning>
			}
			<List>
				{list.map((contact, key) => (
					<li key={key}>
						<div>
							<p>{contact.name}</p>
							<p>{contact.email}</p>
						</div>
						<button onClick={() => handleDelete(key)}>Delete</button>
					</li>
				))}
			</List>
		</Section>
	);
};

export default ContactsPage;
