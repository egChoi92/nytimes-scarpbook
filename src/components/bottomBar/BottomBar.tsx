import Navigation from 'components/navigation/Navigation';
import styled from 'styled-components';

const StyledBottomBar = styled.div`
	padding: 1.25rem 0;
	border-radius: 1.875rem 1.875rem 0 0;
	background-color: #000;
`;
export default function BottomBar() {
	return (
		<StyledBottomBar>
			<Navigation />
		</StyledBottomBar>
	);
}
