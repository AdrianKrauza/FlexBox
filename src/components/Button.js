import styled from 'styled-components';

const Button = styled.div`
	color: ${({ theme }) => theme.colors.white};
	border: 3px solid ${({ theme }) => theme.colors.yellow};
	width: 25rem;
	height: 7rem;
	margin: auto;
	display: block;
	text-align: center;
	font-size: 4rem;
	line-height: 6rem;
	cursor: pointer;
	transition: background-color .3s, color .3s;
    margin-top:1rem;
	&:hover {
		background: ${({ theme }) => theme.colors.yellow};
		color: ${({ theme }) => theme.colors.purple};
	}
`;

export default Button;
