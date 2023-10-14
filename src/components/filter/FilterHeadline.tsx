import { StyledFilter, StyledFilterTitle, StyledInput } from 'styles/compoents';

export default function FilterHeadline() {
	return (
		<StyledFilter>
			<StyledFilterTitle>헤드라인</StyledFilterTitle>
			<StyledInput type="text" placeholder="검색하실 헤드라인을 입력해주세요." />
		</StyledFilter>
	);
}
