import React from 'react';
import Link from 'next/link';
import {Navbar, Container} from './header.style';

const Header = () => {
	return (
		<Navbar>
			<Container>
				<Link href='/'>
					<a>Home</a>
				</Link>
				<Link href='/profile'>
					<a>Profile</a>
				</Link>
				<Link href='/add-contact'>
					<a>Add Contact</a>
				</Link>
				<Link href='/contacts'>
					<a>Contacts</a>
				</Link>
				<Link href='/email'>
					<a>Email</a>
				</Link>
			</Container>
		</Navbar>
	);
};

export default Header;
