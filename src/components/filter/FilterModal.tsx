import FilterDate from 'components/filter/FilterDate';
import FilterHeadline from 'components/filter/FilterHeadline';
import FilterNation from 'components/filter/FilterNation';
import { MouseEvent } from 'react';
import { filterModalStore } from 'state/modal';
import styled from 'styled-components';

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
const StyledModalButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	margin-top: 2.5rem;
	border-radius: 1rem;
	background-color: #3478f6;
	color: #fff;
	letter-spacing: -0.0313rem;
`;

export default function FilterModal() {
	const isShow = filterModalStore((state) => state.isShow);
	const toggleModal = filterModalStore((state) => state.setIsShow);
	const handleDimClick = (event: MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) toggleModal(false);
	};
	const handleFilterSubmit = () => {
		toggleModal(false);
	};

	return (
		isShow && (
			<StyledModal onClick={(event) => handleDimClick(event)}>
				<StyledModalWrapper>
					<FilterHeadline />
					<FilterDate />
					<FilterNation />
					<StyledModalButton onClick={handleFilterSubmit}>필터 적용하기</StyledModalButton>
				</StyledModalWrapper>
			</StyledModal>
		)
	);
}
