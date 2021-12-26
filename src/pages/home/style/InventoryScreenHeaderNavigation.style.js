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
		width: ${(props) => (props.isNavigationButton ? '94px' : '100px')};
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

	@media screen and (min-width: 1200px) {
		.navigation__item {
			width: ${(props) => (props.isNavigationButton ? '94px' : '167px')};
		}
	}
`;

export const StyledInventoryScreenHeaderNavigation = styled.div`
	.inventory__menu__container {
		display: grid;
		/* grid-template-columns: 1fr 263px; */
		height: 73px;
		gap: 10px;
	}
	.control__container {
		display: grid;
		grid-template-columns: 94px auto 94px;
		max-width: calc((94px * 2) + (167px * 7));
	}
	.inventory__menu {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow-y: auto;
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none;
		::-webkit-scrollbar {
			/* WebKit */
			width: 0;
			height: 0;
		}
	}
	.button__control {
		box-shadow: inset 0px -6px 20px rgba(255, 255, 255, 0.06);
		width: 94px;
		border: none;
		background: none;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(255, 255, 255, 0.03);
		border-radius: 0px 0px 8px 8px;
		padding: 25px 0;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		text-align: center;
		color: #a5a5a5;
	}

	.game__score {
		display: flex;
		gap: 28px;
		align-items: center;
		justify-content: center;
		height: 73px;
	}
	.xp_monitor,
	.score_monitor {
		display: flex;
		align-items: center;
	}
	.monitor__point,
	.score_monitor {
		padding-left: 8px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #ffffff;
	}
	.score_monitor {
	}
	@media screen and (min-width: 720px) {
		/* padding: 0 60px; */
		background-position: calc(100% - 60px) 180px, bottom;

		background-size: unset;
		.inventory__menu__container {
			grid-template-columns: 1fr 263px;
		}
	}
	@media screen and (min-width: 900px) {
		padding: unset;
		/* background-blend-mode: unset;
		padding: 0 120px;
		background-position: calc(100% - 120px) 180px, bottom; */
	}
`;
