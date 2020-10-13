import React, { useReducer, useEffect,useState } from 'react';
import Preview from 'components/Preview';
import FlexOptions from 'components/FlexOptions';
import Button from 'components/Button';
import WindowCode from 'components/WindowCode';
import OptionsFlex from 'utils/flexOptions.json';

const FlexBox = () => {
	const [ flexOptions, setFlexOptions ] = useReducer((state, newState) => ({ ...state, ...newState }), {});
	useEffect(() => {
		OptionsFlex.forEach(({ select, options }) => {
			setFlexOptions({ [select]: options[0] });
		});
	}, []);
	const [ isHidden, setIsHidden ] = useState(true);
	return (
		<div>
			<Preview {...{ flexOptions }} />
			<FlexOptions {...{ setFlexOptions, flexOptions, OptionsFlex }} />
			<Button onClick={()=>setIsHidden(false)}>Show code</Button>
			<WindowCode {...{ isHidden, setIsHidden,flexOptions  }}/>
		</div>
	);
};

export default FlexBox;
