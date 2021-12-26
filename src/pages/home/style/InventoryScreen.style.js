import styled, { keyframes } from 'styled-components';
import GodOfWarFace from '../../../assets/god_of_war_face.png';
import ChildFace from '../../../assets/childs_face.png';
import smokeScreen from '../../../assets/smoke-screen.png';
import { ReactComponent as LoadingIcon } from '../../../assets/loading-icon.svg';

const fadeIn = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
`;

export const StyledInventoryItem = styled.div`
	.navigation__item {
		box-shadow: ${(props) => {
			return props.selected ? 'inset 0px -6px 20px #F0DF2D' : 'inset 0px -6px 20px rgba(255, 255, 255, 0.06)';
		}};

		width: ${(props) => (props.isNavigationButton ? '94px' : '167px')};
		border: none;
		background: none;
		display: flex;
		justify-content: center;
		align-items: center;
		background: ${(props) => (props.isNavigationButton ? 'rgba(255, 255, 255, 0.03)' : '#101010')};
		border-radius: 0px 0px 8px 8px;
		padding: 25px 0;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		text-align: center;
		color: #a5a5a5;
	}
`;

export const StyledInventoryScreen = styled.div`
	height: 100vh;
	width: 100vw;

	background: #121212;
	background-image: url(${GodOfWarFace}), url(${smokeScreen});
	background-size: auto calc(100vh - 278px), 100% 100%;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center 180px, bottom;
	background-size: cover;
	background-blend-mode: soft-light;
	overflow-x: hidden;

	@media screen and (min-width: 720px) {
		padding: 0 20px;
		background-position: calc(100% - 60px) 180px, bottom;
		background-size: auto calc(100vh - 278px), 100% 100%;
	}
	@media screen and (min-width: 900px) {
		padding: unset;
		background-blend-mode: unset;
		padding: 0 60px;
		background-position: calc(100% - 120px) 180px, bottom;
	}
	@media screen and (min-width: 1440px) {
		padding: unset;
		background-blend-mode: unset;
		padding: 0 120px;
		background-position: calc(100% - 120px) 180px, bottom;
	}
`;
