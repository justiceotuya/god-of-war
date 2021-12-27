import styled from 'styled-components';
import GameScene from '../../../assets/game-scene.png';

export const StyledGameScene = styled.main`
	background-size: cover;
	height: 100vh;
	background-color: #121212;

	.pause__container {
		filter: ${(props) => props.isPaused && 'blur(10px)'};
		transition: filter 0.2s ease-in 0.5s;
		background-image: url(${GameScene});
		height: 100%;
		width: 100%;
		background-position: 22%;
	}
	.content__container {
		background: rgba(0, 0, 0, 0.6);
		position: absolute;
		inset: 0;
		visibility: ${(props) => (props.isPaused ? 'visible' : 'hidden')};
		transition: visibility 0.2s ease-in 0.4s;
	}
	.menu__container {
		position: absolute;
		width: 100%;
		bottom: 58px;
	}
	.button__container {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		padding-right: 20px;
	}

	@media screen and (min-width: 720px) {
		.button__container {
			padding-right: 120px;
		}
	}
`;
