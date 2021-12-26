import styled from 'styled-components';
import { StyledHome } from './Home.style';

export const StyledSettings = styled.div`
	.select__title {
		font-weight: 600;
		font-size: 48px;
		line-height: 72px;
		letter-spacing: 0.04em;
		color: #ffffff;
		padding-left: 120px;
		margin-top: 70px;
		margin-bottom: 32px;
	}
	.home__select {
		margin-top: 0;
		margin-bottom: 48px;
	}

	.menu__subtitle {
		margin-top: 48px;
		font-weight: 500;
		font-size: 24px;
		line-height: 36px;
		color: rgba(255, 255, 255, 0.9);
		max-width: 556px;
		padding-left: 120px;
		max-width: calc(556px + 120px); //item width + the padding width;
		margin-bottom: 58px;
		min-height: 72px;
	}

	.select__instruction {
		margin-top: 0;
		display: flex;
		gap: 8px;
		padding-left: 120px;

	}
    /* .select__instruction {
		padding-left: 120px;
		margin-top: 10%;
	} */
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
`;
