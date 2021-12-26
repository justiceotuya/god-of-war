import styled from 'styled-components';
import Icon from '../../../assets/hover-logo.svg';

export const StyledMenu = styled.ul`
	display: grid;
	max-width: 667px;
	width: 100%;
	padding-right: 40px;
`;
export const StyledSelectItem = styled.li`
	button {
		width: 100%;
		font-size: 30px;
		line-height: 45px;
		letter-spacing: 0.04em;
		color: ${(props) => (props.selectedMenu === props.title ? '#ffffff' : 'rgba(255, 255, 255, 0.3)')};
		border: none;
		background: none;
		background-repeat: round;
		background-image: ${(props) =>
			props.selectedMenu === props.title &&
			`url(${Icon}),
                linear-gradient(
                    270deg,
                    rgba(255, 255, 255, 0) -2.47%,
                    rgba(255, 255, 255, 0.04855) 41.49%,
                    rgba(255, 255, 255, 0) 100%
                )`};
		text-transform: uppercase;
		padding: 16px 20px;
		text-align: left;
		cursor: pointer;
		:hover,
		:focus {
			background-repeat: round;
			color: #fff;
		}
	}

	@media screen and (min-width: 720px) {
		button {
			padding: 16px 120px;
		}
	}
`;
