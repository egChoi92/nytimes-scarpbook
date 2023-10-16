import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledFilter, StyledFilterTitle, StyledInput } from 'styles/compoents';
import { FilterType } from 'types/filter';

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

interface PropsType {
	defaultValue: string;
	setFilter: Dispatch<SetStateAction<FilterType>>;
}

export default function FilterPubDate({ defaultValue, setFilter }: PropsType) {
	const [date, setDate] = useState(defaultValue);

	const handleDateChange = (target: HTMLInputElement) => {
		setDate(target.value);
	};

	useEffect(() => {
		setFilter((prev) => {
			return { ...prev, pub_date: date };
		});
	}, [date]);

	return (
		<StyledFilter>
			<StyledFilterTitle>날짜</StyledFilterTitle>
			<StyledFilterInputDate
				type="date"
				defaultValue={date}
				data-placeholder={'날짜를 선택해주세요.'}
				onChange={(event) => handleDateChange(event.target)}
			/>
		</StyledFilter>
	);
}
