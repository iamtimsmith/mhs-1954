import React from 'react';
import Heart from '../heart/heart';
import {Section} from './footer.style';

const Footer = () => {
	return (
		<Section>
			This tool was built with <Heart /> by <a href='https://www.iamtimsmith.com'>Tim Smith</a>.
		</Section>
	);
}

export default Footer;
