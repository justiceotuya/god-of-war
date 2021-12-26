import styled from 'styled-components';
import GodOfWarImage from '../../../assets/god-of-war-starring-up.png';

export const StyledHomeLayout = styled.main`
	background-color: #121212;
	height: 100vh;
	width: 100vw;
	background-image: url(${GodOfWarImage});
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-position: center 0px;
	background-size: auto 100%;
	/* background-blend-mode: soft-light; */
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		padding-top: 29px;
	}

	@media screen and (min-width: 720px) {
		background-position: calc(100% - 240px) 0px;
		.header {
			padding: 0 120px;
		}
	}
`;
