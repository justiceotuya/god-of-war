import styled, { keyframes } from 'styled-components';
import GodOfWarFace from '../../../assets/god_of_war_face.png';
import ChildFace from '../../../assets/childs_face.png';
import smokeScreen from '../../../assets/smoke-screen.png';
import { ReactComponent as LoadingIcon } from '../../../assets/loading-icon.svg';
import LevBadge from '../../../assets/god-badge-colored.svg';

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

export const StyledInventoryArmourItem = styled.div`
	height: 100px;
	display: grid;
	place-items: center;
	max-width: 100px;
	background: #101010;
	box-shadow: ${(props) => (props.selected ? 'inset 0px -6px 36px #5bd19f' : 'inset 0px -6px 36px #404040')};
	border-radius: 24px;
	cursor: pointer;
	.armour__menu__item {
	}
	.armour__navigation__item {
		border: none;
		margin: 0;
		padding: 0;
		background: none;
		cursor: pointer;
	}

	@media screen and (min-width: 600px) {
		max-width: 156px;
		height: 156px;
		
	}
`;

export const StyledInventoryScreenArmourSelect = styled.div`
	margin-top: 78px;
	position: relative;
	.armour__menu {
		padding: 20px;
		display: grid;
		gap: 24px;
		grid-auto-rows: 100px;
		grid-template-columns: 100px;
		overflow-x: auto;
		max-height: calc(100vh - 73px - 78px);
		width: 100%;
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none;
		transform: ${(props) => (props.isPreviewHidden ? 'translateX(0)' : 'translateX(-100vw)')};
		transition: 0.2s transform ease-in 0.1s;
		::-webkit-scrollbar {
			/* WebKit */
			width: 0;
			height: 0;
		}
		padding-bottom: 53px;
	}

	.item__preview {
		position: absolute;
		top: ${(props) => props.menuPosition.top};
		bottom: ${(props) => props.menuPosition.bottom};
		transform: ${(props) => (props.isPreviewHidden ? 'translateX(100vw)' : 'translateX(0)')};
		transition: 0.2s transform ease-in;
		right: 10px;
		width: calc(100% - 20px);
		max-width: 435px;
		/* left: 10px; */
	}
	.item__rarity {
		background: #ffffff;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		color: #0a0a0a;
		padding: 11px 21px;
		display: flex;
		justify-content: space-between;
	}
	.close__button {
		width: 20px;
		height: 20px;
		border: none;
		background: none;
		padding: 0;
		svg {
			width: 100%;
			height: 100%;
		}
	}
	.item__description {
		background: #101010;
		border-radius: 0px 0px 8px 8px;
		position: relative;
	}
	.item__name {
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 36px;
		padding: 15px 17px;
		color: #ffffff;
		background: rgba(10, 10, 10);
		position: absolute;
		top: 0;
		width: 100%;
		left: 0;
		right: 0;
		z-index: 3;
		padding-top: 24px;
	}
	.item__about__container {
		height: calc(312px + 66px);
		position: relative;
	}
	.item__about__container::after {
		display: table;
		content: '';
		background-image: url(${LevBadge});
		background-position: center -76px;
		background-repeat: no-repeat;
		height: 318px;
		width: 100%;
		position: absolute;
		background-size: cover;
		/* filter: blur(-10px); */
		top: 66px;
	}
	.item__about__text {
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		color: #ffffff;
		position: absolute;
		padding: 24px;
		top: 75px;
	}
	.item__skills__container {
		position: absolute;
		bottom: 29px;
		right: 17px;
		left: 17px;
		background: rgba(10, 10, 10, 0.8);
		border-radius: 8px;
		display: grid;
		grid-template-columns: 130.1px auto;
		padding: 30px 20px;
		gap: 12px;
	}
	.item__level {
		align-self: center;
		justify-self: center;
		background: #101010;
		box-shadow: inset 0px -6px 36px #f0df2d;
		border-radius: 8px;
		transform: rotate(-45deg);
		display: flex;
		align-items: center;
		justify-content: center;
		transform: rotate(135deg);
		width: 92px;
		height: 92px;
	}
	.box__content {
		gap: 15px;
		position: absolute;
		transform: rotate(-135deg);
		display: flex;
		flex-direction: column;
		align-items: center;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: #ffffff;
	}
	.level__title {
	}
	.level__text {
		font-size: 50px;
	}
	.skills__container {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.skills__item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: #ffffff;
	}
	.skills__title {
	}
	.skills__measure {
		color: rgba(255, 255, 255, 0.6);
	}

	@media screen and (min-width: 600px) {
		.item__name {
			font-size: 24px;
		}
		.item__about__text {
			font-size: 16px;
		}
		.close__button {
			display: none;
		}
		.armour__menu {
			grid-auto-rows: 156px;
			grid-template-columns: 156px;
			transform: translateX(0);
		}
		.item__preview {
			width: 100%;
			left: calc(188px + 5px);
			transform: translateX(0);
			transition: none;
		}
	}
	@media screen and (min-width: 720px) {
		.armour__menu {
			padding: 0;
			padding-bottom: 53px;
		}
		.item__preview {
			width: 100%;
			left: calc(188px + 5px);
		}
	}
	@media screen and (min-width: 920px) {
		.item__preview {
			left: calc(188px + 156px);
		}
	}
`;
