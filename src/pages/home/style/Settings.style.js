import styled from 'styled-components';

export const StyledSettings = styled.div`
	.select__title {
		font-size: 30px;
		padding-left: 20px;
		margin-top: 50px;
		margin-bottom: 22px;
		font-weight: 600;
		line-height: 72px;
		letter-spacing: 0.04em;
		color: #ffffff;
	}
	.home__select {
		margin-top: 0;
		margin-bottom: 48px;
	}

	.menu__subtitle {
		margin-top: 48px;
		font-weight: 500;
		font-size: 20px;
		line-height: 36px;
		color: rgba(255, 255, 255, 0.9);
		max-width: 556px;
		padding: 0 20px;
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

	.instruction__text {
		display: flex;
		align-items: center;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #ffffff;
		/* padding: 33px 10px; */
		span {
			padding: 0 8px;
			display: flex;
		}
	}
	.button__container {
		padding-left: 20px;
	}
	@media screen and (min-width: 720px) {
		.select__title {
			font-size: 48px;
			padding-left: 120px;
			margin-top: 70px;
			margin-bottom: 32px;
		}
		.button__container,
		.menu__subtitle {
			padding-left: 120px;
		}
	}
`;
