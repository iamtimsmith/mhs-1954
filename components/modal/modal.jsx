import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content, Button} from './modal.style';

const Modal = ({show, setShow, children}) => {
	return (
		<Container show={show}>
			<Content>
				<Button onClick={() => setShow(false)}>&#215;</Button>
				{children}
			</Content>
		</Container>
	);
}

Modal.propTypes = {
	show: PropTypes.bool,
	setShow: PropTypes.func,
	children: PropTypes.node.isRequired,
}

export default Modal;
