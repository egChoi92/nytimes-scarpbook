import ImageIconCalendarInactive from 'assets/images/icon/calendar_inactive.svg';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { StyledFilter, StyledFilterTitle, StyledInput } from 'styles/compoents';
import { FilterType } from 'types/filter';

export const StyledFilterInputDate = styled(StyledInput)<{ $isEmpty: boolean; $icon: string }>`
	position: relative;
	background: url(${(props) => props.$icon}) no-repeat calc(100% - 1.25rem) 50%;
	&::-webkit-calendar-picker-indicator {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		cursor: pointer;
	}
	${(props) => {
		if (props.$isEmpty) {
			return css`
				&::before {
					content: attr(data-placeholder);
					width: 100%;
					color: #c4c4c4;
				}
			`;
		}
	}};
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
				$isEmpty={!date}
				$icon={ImageIconCalendarInactive}
				type="date"
				defaultValue={date}
				data-placeholder={'날짜를 선택해주세요.'}
				onChange={(event) => handleDateChange(event.target)}
			/>
		</StyledFilter>
	);
}
