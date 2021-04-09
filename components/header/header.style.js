import styled from 'styled-components';

export const Navbar = styled.header`
	padding: 50px 0;

	@media print {
		display: none;
	}
`;

export const Container = styled.nav`
	${props => props.theme.container}
	text-align: center;

	a {
		padding: 15px;
	}
`;
