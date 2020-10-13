import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 95vw;
	height: 50vh;
	min-height: 30rem;
	background: ${({ theme }) => theme.colors.darkPurple};
	margin: auto;
	display: block;
	margin-top: calc(1vw );
	position: relative;
	margin-bottom: 20px;
	&:after {
		content: 'Preview';
		color: ${({ theme }) => theme.colors.white};
		position: absolute;
		top: 1rem;
		left: 1rem;
		font-size: 2.5rem;
	}

`;

const Boxs = styled.div`
	display: flex;
	justify-content: space-around;
	align-content: center;
	flex-wrap: wrap;
	height: 100%;
	${({ flexStyle }) => flexStyle}};
`;

const Box = styled.div`
	width: 10rem;
	height: 10rem;
	background: ${({ theme }) => theme.colors.yellow};
	text-align: center;
	line-height: 10rem;
	color: ${({ theme }) => theme.colors.darkPurple};
	font-size: 5rem;

	${({ theme }) => theme.media.desktop`
			width: 15rem;
	height: 15rem;
	font-size: 8rem;
	line-height: 14rem;
		`}
`;
const Preview = ({ flexOptions }) => {
    const flexStyle =  Object.entries(flexOptions).map(([first,second] )=> `${first}:${second};`).toString().replaceAll(',','')

	return (
		<Container>
			<Boxs {...{ flexStyle }}>
				<Box>1</Box>
				<Box>2</Box>
				<Box>3</Box>
			</Boxs>
		</Container>
	);
};

export default Preview;
