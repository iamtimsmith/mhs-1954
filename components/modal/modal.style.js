import styled from 'styled-components';

export const Container = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0,0,0,0.5);
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	visibility: hidden;
	opacity: 0;

	${props => props.show && `
		visibility: visible;
		opacity: 1;
	`}
`;

export const Content = styled.div`
	${props => props.theme.container}
	width: 100%;
	padding: 15px 30px;
	background: #ffffff;
	display: flex;
	flex-wrap: wrap;
`;

export const Button = styled.button`
	${props => props.theme.button}
	background: none !important;
	padding: 0;
	color: #000000;
	font-size: 30px;
	margin-left: auto;
`;
