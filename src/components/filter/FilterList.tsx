import ImageIconCalendarInactive from 'assets/images/icon/calendar_inactive.svg';
import ImageIconSearchInactive from 'assets/images/icon/search_inactive.svg';
import FilterButton from 'components/filter/FilterButton';
import { locationDic } from 'constants/filter';
import { filterStore } from 'store/filter';
import styled from 'styled-components';
import { dictionary } from 'utils/object';

const StyledFilter = styled.div`
	display: flex;
`;

export default function FilterList() {
	const filterState = {
		filter: filterStore((state) => state.filter),
	};

	const locationText = (() => {
		const firstTitle = dictionary(filterState.filter.glocations[0], locationDic);
		const locationCount = filterState.filter.glocations.length - 1;

		if (firstTitle) {
			return `${firstTitle} ${locationCount ? `외 ${locationCount}` : ''}`;
		} else return '';
	})();

	const filterButtonProps = [
		{
			id: 'headline',
			text: filterState.filter.headline || '전체 헤드라인',
			iconSrc: ImageIconSearchInactive,
		},
		{
			id: 'search',
			text: filterState.filter.pub_date || '전체 날짜',
			iconSrc: ImageIconCalendarInactive,
		},
		{
			id: 'country',
			text: locationText || '전체 국가',
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
