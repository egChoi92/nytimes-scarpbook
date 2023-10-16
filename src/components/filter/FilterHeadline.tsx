import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { StyledFilter, StyledFilterTitle, StyledInput } from 'styles/compoents';
import { FilterType } from 'types/filter';

interface PropsType {
	defaultValue: string;
	setFilter: Dispatch<SetStateAction<FilterType>>;
}

export default function FilterHeadline({ defaultValue, setFilter }: PropsType) {
	const [headline, setHeadline] = useState(defaultValue);

	const handleHeadlineChange = (target: HTMLInputElement) => {
		setHeadline(target.value);
	};

	useEffect(() => {
		setFilter((prev) => {
			return { ...prev, headline: headline };
		});
	}, [headline]);

	return (
		<StyledFilter>
			<StyledFilterTitle>헤드라인</StyledFilterTitle>
			<StyledInput
				type="text"
				name="headline"
				defaultValue={headline}
				placeholder="검색하실 헤드라인을 입력해주세요."
				onChange={(event) => handleHeadlineChange(event.target)}
			/>
		</StyledFilter>
	);
}
