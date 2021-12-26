import styled from 'styled-components';
import GameScene from '../../../assets/game-scene.png';

export const StyledGameScene = styled.main`
	background-size: cover;
	height: 100vh;
	background-color: #121212;

	.pause__container {
		filter: blur(10px);
		background-image: url(${GameScene});
		height: 100%;
		width: 100%;
	}
	.content__container {
		background: rgba(0, 0, 0, 0.6);
		position: absolute;
		inset: 0;
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
		padding-right: 120px;
	}
`;
