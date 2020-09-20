import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	${props => props.theme.container}
`;

const Title = styled.h1`
	font-size: 60px;
	font-weight: bold;
	color: ${props => props.theme.primary};
	margin: 0;
`;

const Subtitle = styled.h2`
	border-bottom: 1px solid rgba(0,0,0,0.2);
	margin-bottom: 0;
`;

const Content = styled.p`
	margin-bottom: 50px;
`;

const Email = styled.span`
	color: ${props => props.theme.primary};
	text-decoration: underline;
`;

const IndexPage = () => {
	const user = JSON.parse(localStorage.getItem(`user`));
	const email = user.email || `**NO EMAIL HAS BEEN SET YET**`;
	return (
		<Section>
			<Title>MHS 1954 Email Tool</Title>
			<Content>
				Welcome to the MHS Class of 1954 Email tool. You can use this tool to send out simple emails to people in your class about upcoming lunches without all of the complicated stuff. Below you'll find descriptions of each page as well as instructions to use the tool. Happy emailing!
			</Content>
			<Subtitle>Profile</Subtitle>
			<Content>
				The profile page contains information about you (the sender). Here, you can set your name and email address. These will show up in the recipient's email in the from field.
			</Content>
			<Subtitle>Contacts</Subtitle>
			<Content>
				On the contacts page, you'll find a list of all the people who will receive your email. You can also delete them from here. If you need to change a recipient, you'll have to delete them and add them again.
			</Content>
			<Subtitle>Add Contact</Subtitle>
			<Content>
				You can add a new recipient on the Add Contact page. This will update the list found on the Contacts page.
			</Content>
			<Subtitle>Email</Subtitle>
			<Content>
				The email page is where you set the subject and content of the email and send it from. Since your name/email are on the email being sent, you can expect any responses to the email in your inbox at <Email>{email}</Email>!
			</Content>
		</Section>
	);
}

export default IndexPage;
