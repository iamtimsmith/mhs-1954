import {createGlobalStyle} from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
		font-family: ${theme.sansSerif};
		font-size: 20px;
		line-height: 1.5;
  }
	*, *:before, *:after {
		box-sizing: border-box;
	}

	h1, h2, h3, h4, h5 {
		font-weight: normal;
	}
	h1 {
		font-size: 40px;
	}
	h2 {
		font-size: 32px;
	}

	label {
		display: block;
		font-size: 20px;
		margin-bottom: 10px;
		width: 100%;
	}
	input {
		display: block;
		padding: 10px;
		font-size: 20px;
		width: 100%;
	}
	textarea {
		display: block;
		padding: 10px;
		font-size: 20px;
		width: 100%;
		height: 200px;
		resize: none;
		font-family: ${theme.sansSerif};
	}
`;

export default GlobalStyle;
