import styled, { keyframes } from 'styled-components';
import LevBadge from '../../../assets/god-badge.svg';
import smokeScreen from '../../../assets/smoke-screen.png';
import { ReactComponent as LoadingIcon } from '../../../assets/loading-icon.svg';

const fadeIn = keyframes`
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledLoadingIcon = styled(LoadingIcon)`
	position: fixed;
	bottom: 104px;
	right: 120px;
	animation: 1s ${fadeIn} infinite alternate;
`;

export const StyledLoadingScreen = styled.div`
	height: 100vh;
	width: 100vw;
	background: #121212;
	background-image: url(${LevBadge}), url(${smokeScreen});
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center calc(50% - 185px), bottom;
	display: flex;
	align-items: center;
	justify-content: center;

	.text__container {
	}
	.axe__image__container {
		text-align: center;
		margin-bottom: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;

		span {
			height: 65px;
			position: relative;
			::after,
			::before {
				content: '';
				display: table;
				height: 2px;
				width: calc(50vw - 132px);
				/* width: 100%; */
				background: rgba(51, 51, 51, 0.5);
				position: absolute;
				top: 30px;
				left: 72px;
			}
			::before {
				top: 38px;
			}
		}
	}
	.left__axe {
		::after,
		::before {
			right: 72px !important;
			left: unset !important;
		}
	}
	.right__axe {
		svg {
			display: block;
			transform: matrix(-1, 0, 0, 1, 0, 0);
		}
	}


	@media screen and (min-width: 720px) {
		.axe__image__container {
			span {
				::after,
				::before {
					width: 238px;
				}
			}
		}
	}
`;
