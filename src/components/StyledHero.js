import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';
import { promised } from 'q';

// Dynamic css using styled components
// npm install --save styled-components
const StyledHero = styled.header`

	min-height: 60vh;
	background: url(${props=>props.img}) center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;

`;

export default StyledHero;