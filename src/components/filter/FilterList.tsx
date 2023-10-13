import ImageIconCalendarInactive from 'assets/images/icon/calendar_inactive.svg';
import ImageIconSearchInactive from 'assets/images/icon/search_inactive.svg';
import FilterButton from 'components/filter/FilterButton';
import styled from 'styled-components';

const StyledFilter = styled.div`
	display: flex;
`;

export default function FilterList() {
	const filterButtonProps = [
		{
			id: 'headline',
			text: '전체 헤드라인',
			iconSrc: ImageIconSearchInactive,
		},
		{
			id: 'search',
			text: '전체 날짜',
			iconSrc: ImageIconCalendarInactive,
		},
		{
			id: 'country',
			text: '전체 국가',
		},
	];

	return (
		<StyledFilter>
			{filterButtonProps.map((props, index) => (
				<FilterButton key={`filter-button-${index}`} {...props} />
			))}
		</StyledFilter>
	);
}
