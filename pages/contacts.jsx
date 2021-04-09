import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {MdPrint} from 'react-icons/md';

const Section = styled.section`
	${props => props.theme.container}
`;

const Warning = styled.p`
	margin: 30px 0;
	color: rgba(0,0,0,0.5);
	text-align: center;

	@media print {
		display: none;
	}
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

const ContactHeader = styled.header`
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;

	${(props) => props.theme.media.tablet} {
		grid-template-columns: 5fr 1fr 1fr;
	}

	h1 {
		margin-bottom: 0;

		${(props) => props.theme.media.tablet} {
			margin-bottom: 30px;
		}

		@media print {
			margin-bottom: 0;
		}
	}

	label {
		margin: 0 0 10px;

		@media print {
			display: none;
		}

		select {
			display: inline-block;
			position: relative;
			bottom: 1px;
			font-size: 1.2rem;
		}
	}

	button {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 1.2rem;
		background: transparent;
		border: none;
		cursor: pointer;
		opacity: 0.8;
		margin-bottom: 10px;

		${(props) => props.theme.media.tablet} {
			justify-content: center;
		}

		@media print {
			display: none;
		}

		svg {
			margin-right: 5px;
		}
	}
`;

const Search = styled.input`
	@media print {
		display: none;
	}
`;

const ContactsPage = () => {
	const [search, setSearch] = useState(``);
	const [contacts, setContacts] = useState([]);
	const [sort, setSort] = useState(`az`);

	const handleDelete = (key) => {
		let arr = [];
		for(let i=0; i < contacts.length; i++) {
			if (i !== key) arr.push(contacts[i]);
		}
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

	sort === 'az' ?
		list.sort( (a, b) => a.name.localeCompare(b.name, 'en', {'sensitivity': 'base'})) :
		list.sort( (a, b) => b.name.localeCompare(a.name, 'en', {'sensitivity': 'base'}));

	return (
		<Section>
			<ContactHeader>
				<h1>Contacts</h1>
				<button onClick={() => window.print()}><MdPrint/> Print</button>
				<label htmlFor="sort">Sort{` `}
					<select name="sort" id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
						<option value="az">A-Z</option>
						<option value="za">Z-A</option>
					</select>
				</label>
			</ContactHeader>
			<Search type="text" placeholder='Search...' value={search} onChange={e => setSearch(e.target.value)} />
			{(list.length < 1 && !search) &&
				<Warning>You haven't added any contacts yet. <Link href='/add-contact'><a>Add a contact</a></Link></Warning>
			}
			{(list.length < 1 && search) &&
				<Warning>You don't have any contacts that match your search. Perhaps you need to <Link href='/add-contact'><a>Add a contact</a></Link></Warning>
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
