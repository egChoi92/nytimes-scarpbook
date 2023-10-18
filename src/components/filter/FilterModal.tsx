import FilterHeadline from 'components/filter/FilterHeadline';
import FilterLocations from 'components/filter/FilterLocations';
import FilterPubDate from 'components/filter/FilterPubDate';
import { initialFilterState } from 'constants/filter';
import { MouseEvent, useState } from 'react';
import { filterStore } from 'store/filter';
import { filterModalStore } from 'store/modal';
import styled from 'styled-components';
import { StyledSubmitButton } from 'styles/compoents';

const StyledModal = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;
const StyledModalWrapper = styled.div`
	width: 89.33333333333333%;
	max-width: 335px;
	padding: 1.25rem;
	border-radius: 1rem;
	background-color: #fff;
`;

export default function FilterModal() {
	const modalState = {
		isShow: filterModalStore((state) => state.isShow),
		toggleModal: filterModalStore((state) => state.setIsShow),
	};
	const filterState = {
		filter: filterStore((state) => state.filter),
		setFilter: filterStore((state) => state.setFilter),
	};

	const [filter, setFilter] = useState(filterState.filter);

	const handleDimClick = (event: MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			setFilter(initialFilterState);
			modalState.toggleModal(false);
		}
	};

	const handleFilterSubmit = () => {
		filterState.setFilter(filter);
		modalState.toggleModal(false);
	};

	return (
		modalState.isShow && (
			<StyledModal onClick={(event) => handleDimClick(event)}>
				<StyledModalWrapper>
					<FilterHeadline defaultValue={filterState.filter.headline} setFilter={setFilter} />
					<FilterPubDate defaultValue={filterState.filter.pub_date} setFilter={setFilter} />
					<FilterLocations defaultValue={filterState.filter.glocations} setFilter={setFilter} />
					<StyledSubmitButton type="button" onClick={handleFilterSubmit}>
						필터 적용하기
					</StyledSubmitButton>
				</StyledModalWrapper>
			</StyledModal>
		)
	);
}
