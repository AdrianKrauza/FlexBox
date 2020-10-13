import React, { useState, useRef } from 'react';
import useOutsideClick from 'utils/useOutsideClick';
import styled from 'styled-components';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

const DropDown = styled.div`

	position: absolute;
	margin-top: 1rem;
	border: none;
	background: ${({ theme }) => theme.colors.darkPurple};
	color: ${({ theme }) => theme.colors.white};
	width: 23rem;
	height: 4rem;
	font-size: 2rem;
	height: ${({ height }) => height * 3.5}rem;
	transition: opacity .5s ${({ isHidden }) => isHidden && '.3s'};
	opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
	overflow: hidden;
	z-index: ${({ isHidden }) => (isHidden ? -3 : 3)};
	:after {
		transition: transform .5s ${({ isHidden }) => isHidden && '.2s'};
		transform: translateY(${({ isHidden }) => !isHidden && '20rem'});
		content: " ";
		width: 100%;
		height: 100%;
		background: ${({ theme }) => theme.colors.purple};
		display: block;
		top: 0;
		
		position: absolute;
	}
	cursor: ${({ isHidden }) => !isHidden && 'pointer'};
`;
const StyledInput = styled.input`display: none;`;
const StyledLabel = styled.label`padding-left: 2rem;`;
const Option = styled.div`
	width: 100%;
	height: 3.5rem;
	line-height: 3.5rem;
	transition: color .3s, background-color .3s, transform .4s ${({ isHidden }) => !isHidden && '.2s'},
		opacity .2s ${({ isHidden }) => !isHidden && '.2s'};
	transform: translateX(${({ isHidden }) => isHidden && '-20rem'});
	opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
	&:hover {
		background: ${({ theme }) => theme.colors.yellow};
		color: ${({ theme }) => theme.colors.darkPurple};
	}
`;
const Select = styled.div``;
const StyledArrow = styled(Arrow)`
transition :transform .5s;
transform: rotate( ${({ isHidden }) => (isHidden ? 0 : 180)}deg) ;
	width:2.5rem;
float:right;
margin-top:1.2rem;
margin-right:1.5rem;
`;
const WWW = styled.div`
	cursor: pointer;
	background: ${({ theme }) => theme.colors.darkPurple};
	color: ${({ theme }) => theme.colors.white};
	width: 230px;
	height: 40px;
	font-size: 2rem;
	line-height: 4rem;
	transition: color .3s, background-color .3s;
	padding-left: 2rem;
	&:active {
		background: ${({ theme }) => theme.colors.yellow};
		color: ${({ theme }) => theme.colors.darkPurple};
	}
`;
const StyledP = styled.p`
	color: ${({ theme }) => theme.colors.white};
	line-height: 5rem;
	font-size: 2.5rem;
`;
const Container = styled.div`
	margin: 1rem 0;
	width: 50rem;
	display: flex;
	justify-content: space-between;
`;

const Input = ({ options, select, setFlexOptions, flexOptions }) => {
	const [ isHidden, setIsHidden ] = useState(true);
	const ref = useRef();

	useOutsideClick(ref, () => setIsHidden(true));

	return (
		<Container>
			<StyledP>{select}</StyledP>
			<Select ref={ref}>
				<WWW onClick={() => setIsHidden(!isHidden)}>
					{flexOptions[select]} <StyledArrow isHidden={isHidden} />
				</WWW>

				<DropDown onClick={() => setIsHidden(true)} height={options.length} isHidden={isHidden}>
					{options.map((element, index) => (
						<Option
							key={element}
							onClick={() => {
								!isHidden && setFlexOptions({ [select]: element });
							}}
							isHidden={isHidden}
						>
							<StyledInput id={index} type="radio" name="radio" />
							<StyledLabel htmlFor={index}>{element}</StyledLabel>
						</Option>
					))}
				</DropDown>
			</Select>
		</Container>
	);
};

export default Input;
