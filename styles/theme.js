const theme = {
	primary: `#800000`,
	sansSerif: `sans-serif`,
	media: {
		tablet: `@media screen and (min-width: 768px)`,
	},
	button: `
		background: #800000;
		padding: 15px 25px;
		font-size: 20px;
		color: #ffffff;
		border: none;
		box-shadow: none;
		cursor: pointer;
		border-radius: 3px;
		transition: all 0.3s;
		&:hover {
			background: #600000;
		}
	`,
	container: `
		max-width: 750px;
		margin: 0 auto;
		padding: 0 15px;
	`,
}

export default theme;
