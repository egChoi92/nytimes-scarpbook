import { useState } from 'react';
import { StyledFilter, StyledFilterTitle, StyledInput } from 'styles/compoents';

export default function FilterHeadline() {
	const [headline, setHeadline] = useState('');

	const handleHeadlineChange = (target: HTMLInputElement) => {
		setHeadline(target.value);
	};

	return (
		<StyledFilter>
			<StyledFilterTitle>헤드라인</StyledFilterTitle>
			<StyledInput
				type="text"
				defaultValue={headline}
				placeholder="검색하실 헤드라인을 입력해주세요."
				onChange={(event) => handleHeadlineChange(event.target)}
			/>
		</StyledFilter>
	);
}
