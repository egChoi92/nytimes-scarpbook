import { locationDic } from 'constants/filter';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledFilter, StyledFilterTitle } from 'styles/compoents';
import { FilterType } from 'types/filter';

const StyledFilterGlocationsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: -0.25rem;
`;
const StyledFilterGlocationsItem = styled.li`
	overflow: hidden;
	padding: 0.25rem;
`;
const StyledFilterCheckbox = styled.input`
	&:checked + label {
		background-color: #82b0f4;
		color: #fff;
	}
`;
const StyledFilterLabel = styled.label`
	display: inline-block;
	padding: 0.25rem 0.75rem;
	border-radius: 1.875rem;
	border: 1px solid #f2f2f2;
	font-size: 0.875rem;
	line-height: 1.7142857142857142;
	color: #6d6d6d;
	letter-spacing: -0.025rem;
	text-align: center;
`;

interface PropsType {
	defaultValue: string[];
	setFilter: Dispatch<SetStateAction<FilterType>>;
}

export default function FilterLocations({ defaultValue, setFilter }: PropsType) {
	const [locations, setLocations] = useState<string[]>(defaultValue);

	const handleHeadlineChange = (target: HTMLInputElement) => {
		const { value, checked } = target;
		if (checked) {
			setLocations([...locations, value]);
		} else {
			setLocations(locations.filter((item) => item !== value));
		}
	};

	useEffect(() => {
		setFilter((prev) => {
			return { ...prev, glocations: locations };
		});
	}, [locations]);

	return (
		<StyledFilter>
			<StyledFilterTitle>국가</StyledFilterTitle>
			<StyledFilterGlocationsList>
				{locationDic.map((props, index) => {
					const { text, value } = props;
					const id = `checkbox-${value.replace(/"/g, '')}`;
					const isChecked = locations.includes(value);
					return (
						<StyledFilterGlocationsItem key={`filter-gloaction-${index}`}>
							<StyledFilterCheckbox
								type="checkbox"
								name=""
								id={id}
								className="hidden"
								value={value}
								checked={isChecked}
								onChange={(event) => handleHeadlineChange(event.target)}
							/>
							<StyledFilterLabel htmlFor={id}>{text}</StyledFilterLabel>
						</StyledFilterGlocationsItem>
					);
				})}
			</StyledFilterGlocationsList>
		</StyledFilter>
	);
}
