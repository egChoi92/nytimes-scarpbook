import styled from 'styled-components';
import { StyledFilter, StyledFilterTitle, StyledInput } from 'styles/compoents';

export const StyledFilterInputDate = styled(StyledInput)`
	&::before {
		content: attr(data-placeholder);
		width: 100%;
		color: #c4c4c4;
	}

	&:focus::before {
		display: none;
	}
`;

export default function FilterPubDate() {
	// const [pubDate, setPubDate] = useState('');

	// const hande

	return (
		<StyledFilter>
			<StyledFilterTitle>날짜</StyledFilterTitle>
			<StyledFilterInputDate type="date" data-placeholder="날짜를 선택해주세요." />
		</StyledFilter>
	);
}
