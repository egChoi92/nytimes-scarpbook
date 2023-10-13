import styled from 'styled-components';

interface PropsType {
	id: string;
	text: string;
	iconSrc?: string;
}

const StyledFilterButton = styled.button`
	display: flex;
	align-items: center;
	padding: 0.375rem 0.75rem;
	border: 1px solid ${(props) => props.theme.color.rightGray};
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

export default function FilterButton({ id, text, iconSrc }: PropsType) {
	return (
		<StyledFilterButton className={`button-${id}`}>
			<img src={iconSrc} alt="" />
			<StyledFilterButtonText>
				<span>{text}</span>
			</StyledFilterButtonText>
		</StyledFilterButton>
	);
}
