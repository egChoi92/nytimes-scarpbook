import ImageIconCalendarActive from 'assets/images/icon/calendar_active.svg';
import ImageIconCalendarInactive from 'assets/images/icon/calendar_inactive.svg';
import ImageIconSearchActive from 'assets/images/icon/search_active.svg';
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
	const { headline, pub_date, glocations } = filterState.filter;

	const locationText = (() => {
		const firstTitle = dictionary(glocations[0], locationDic);
		const locationCount = glocations.length - 1;

		if (firstTitle) {
			return `${firstTitle} ${locationCount ? `외 ${locationCount}` : ''}`;
		} else return '';
	})();

	const filterButtonProps = [
		{
			className: `button-headline ${headline && 'is-active'}`,
			text: headline || '전체 헤드라인',
			iconSrc: headline ? ImageIconSearchActive : ImageIconSearchInactive,
		},
		{
			className: `button-search ${pub_date && 'is-active'}`,
			text: pub_date || '전체 날짜',
			iconSrc: pub_date ? ImageIconCalendarActive : ImageIconCalendarInactive,
		},
		{
			className: `button-country ${locationText && 'is-active'}`,
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
