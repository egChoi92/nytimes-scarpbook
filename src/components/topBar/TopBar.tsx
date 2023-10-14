import FilterList from 'components/filter/FilterList';
import styled from 'styled-components';

const StyledTopBar = styled.div`
	padding: 0.875rem 1.25rem;
	border-bottom: 1px solid #c4c4c4;
	background-color: #fff;
`;

export default function TopBar() {
	return (
		<StyledTopBar>
			<FilterList />
		</StyledTopBar>
	);
}
