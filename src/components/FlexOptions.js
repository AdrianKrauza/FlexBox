import React from 'react';
import styled from 'styled-components';
import Input from 'components/Input';

const Inputs = styled.div`
	width: 70%;
	/* min-width:130rem; */
	display: block;
	margin: auto;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	${({ theme }) => theme.media.desktop`
			justify-content: space-between;
		`}
`;
const FlexOptions = ({ setFlexOptions, flexOptions, OptionsFlex }) => {
	return (
		<Inputs>
			{OptionsFlex.map(({ select, options }) => <Input {...{ setFlexOptions, flexOptions, select, options }} />)}
		</Inputs>
	);
};

export default FlexOptions;
