import FilterList from 'components/filter/FilterList';
import styled from 'styled-components';

const StyledTopBar = styled.div`
	padding: 0.875rem 1.25rem;
	border-bottom: 1px solid ${(props) => props.theme.color.rightGray};
	background-color: #fff;
`;

export default function TopBar() {
	return (
		<StyledTopBar>
			<FilterList />
		</StyledTopBar>
	);
}
