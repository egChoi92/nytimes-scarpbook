import { modalStore } from 'store/modal';
import styled from 'styled-components';

const StyledFilterButton = styled.button`
	display: flex;
	align-items: center;
	padding: 0.375rem 0.75rem;
	border: 1px solid #c4c4c4;
	border-radius: 1.875rem;
	& + & {
		margin-left: 0.5rem;
	}
	&.button-headline {
		overflow: hidden;
	}
	> img {
		margin-right: 0.25rem;
	}
	&.is-active {
		border-color: #82b0f4;
		color: #3478f6;
	}
`;

const StyledFilterButtonText = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	> span {
		font-size: 0.875rem;
		line-height: 1.7142857142857142;
		white-space: nowrap;
		letter-spacing: -0.0437rem;
	}
`;

interface PropsType {
	className: string;
	text: string;
	iconSrc?: string;
}

export default function FilterButton({ className, text, iconSrc }: PropsType) {
	const toggleModal = modalStore((state) => state.setIsShow);
	const handleFilterModalOpen = () => {
		toggleModal(true);
	};
	return (
		<StyledFilterButton className={className} onClick={handleFilterModalOpen}>
			<img src={iconSrc} alt="" />
			<StyledFilterButtonText>
				<span>{text}</span>
			</StyledFilterButtonText>
		</StyledFilterButton>
	);
}
