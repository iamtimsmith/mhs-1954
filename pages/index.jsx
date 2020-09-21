import React, {useState, useEffect} from 'react';
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

const IndexPage = () => {
	return (
		<Section>
			<Title>Newsletter Email Tool</Title>
			<Content>
				Welcome to the Newsletter Email tool. You can use this tool to send out simple emails to people in your class about upcoming lunches without all of the complicated stuff. Below you'll find descriptions of each page as well as instructions to use the tool. Happy emailing!
			</Content>
			<Subtitle>Privacy</Subtitle>
			<Content>
				There isn't a page called privacy, but I wanted to address any questions about your information. When you save your information, it is stored in your browser (on the device you're using). Clearing your browser's cache will delete all of the stuff you've saved. There are no databases or other locations being used to store anything, so you don't have to worry about your information being used without your knowledge.<br /><br />When you send an email, the application will ask for your password. This is required to send an email, though it isn't stored anywhere (not even in your browser) to make sure there's no risk of it being found. The idea behind this tool is for you to easily email groups of people without worrying about managing contacts or risking your privacy to do so.<br /><br />Note: At this time, the tool only works with gmail accounts.
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
				The email page is where you set the subject and content of the email and send it from. Since your name/email are on the email being sent, you can expect any responses to the email in your inbox!
			</Content>
		</Section>
	);
}

export default IndexPage;
