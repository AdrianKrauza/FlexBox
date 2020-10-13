import React, { useRef } from 'react';
import styled from 'styled-components';
import useOutsideClick from 'utils/useOutsideClick';
import { ReactComponent as Close } from 'assets/icons/close.svg';
const Container = styled.div`
width: 95vw;
	/* overflow: hidden; */
	height: 50rem;
	background-color: ${({ theme }) => theme.colors.darkPurple};
	border: 4px solid${({ theme }) => theme.colors.purple};
	position: absolute;
	top: 10rem;
	left: calc(50% - 47.5vw);
	box-shadow: 0px 0px 8px 1px ${({ theme }) => theme.colors.darkPurple};
	transition: opacity .5s;
	opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
	z-index: ${({ isHidden }) => (isHidden ? -1 : 1)};
	&:after {
		content: 'CSS';
		color: ${({ theme }) => theme.colors.white};
		position: absolute;
		top: 1rem;
		left: 1rem;
		font-size: 2.5rem;
	}
	${({ theme }) => theme.media.desktopSmall`
		width: 90rem;
		left: calc(50% - 45rem);
		`}
`;
const Code = styled.div`
	height: 85%;
	width: 100%;
	padding: 10rem;
`;
const Button = styled.button`
	background: ${({ theme }) => theme.colors.purple};
	height: 15%;
	width: 100%;
	text-align: center;
	font-size: 4rem;
	color: ${({ theme }) => theme.colors.white};
	line-height: 7rem;
	border: 3px solid${({ theme }) => theme.colors.purple};
	transition: background-color .3s, color .3s;
	&:hover {
		background: ${({ theme }) => theme.colors.yellow};
		color: ${({ theme }) => theme.colors.darkPurple};
	}
`;
const First = styled.div`color: ${({ theme }) => theme.colors.white};`;
const Second = styled.div`
	color: ${({ theme }) => theme.colors.yellow};
	padding-left: 1rem;
`;
const LineCode = styled.div`
	color: ${({ theme }) => theme.colors.yellow};
	display: flex;
	font-size: 2.3rem;
`;
const StyledClose = styled(Close)`
position:absolute;
	width:2rem;
	right:1rem;
	top:-4rem;
	cursor:pointer;
	path{

	fill: ${({ theme }) => theme.colors.white};
	}
`;
const copy = flexOptions => {
	const el = document.createElement('textarea');
	el.value = Object.entries(flexOptions).map(([ first, second ]) => `${first}:${second};\n`);
	el.value = el.value.replaceAll(',', '');
	el.value = el.value.toLowerCase();
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
};
const FlexOptions = ({ isHidden, setIsHidden, flexOptions }) => {
	const ref = useRef();

	useOutsideClick(ref, () => !isHidden && setIsHidden(true));

	return (
		<Container ref={ref} {...{ isHidden }}>
			<Code>
				<StyledClose onClick={()=>setIsHidden(true)}/>
				{Object.entries(flexOptions).map(([ first, second ]) => (
					<LineCode>
						<First>{first} </First>
						<Second>{second};</Second>
					</LineCode>
				))}
			</Code>
			<Button onClick={() => copy(flexOptions)}>Copy to Clipboard</Button>
		</Container>
	);
};

export default FlexOptions;
