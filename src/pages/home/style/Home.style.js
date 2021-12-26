import styled from 'styled-components';
import Icon from '../../../assets/hover-logo.svg';

export const StyledHome = styled.main`
	margin-top: 10%;
	.select__instruction {
		padding-left: 20px;
		margin-top: 10%;
	}
	.instruction__text {
		display: flex;
		align-items: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #ffffff;
		padding: 33px 10px;
		span {
			padding: 0 15px;
			display: flex;
		}
	}

	@media screen and (min-width: 720px) {
		.select__instruction {
			padding-left: 120px;
		}
	}
`;
