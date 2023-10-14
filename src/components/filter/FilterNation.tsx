import styled from 'styled-components';
import { StyledFilter, StyledFilterTitle } from 'styles/compoents';

const StyledFilterNationList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: -0.25rem;
`;
const StyledFilterNationItem = styled.li`
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

export default function FilterNation() {
	const nationProps = [
		{
			id: 'nation-kor',
			text: '대한민국',
			value: '',
		},
		{
			id: 'nation-chn',
			text: '중국',
			value: '',
		},
		{
			id: 'nation-jpn',
			text: '일본',
			value: '',
		},
		{
			id: 'nation-usa',
			text: '미국',
			value: '',
		},
		{
			id: 'nation-prk',
			text: '북한',
			value: '',
		},
		{
			id: 'nation-rus',
			text: '러시아',
			value: '',
		},
		{
			id: 'nation-fra',
			text: '프랑스',
			value: '',
		},
		{
			id: 'nation-gbr',
			text: '영국',
			value: '',
		},
	];
	return (
		<StyledFilter>
			<StyledFilterTitle>국가</StyledFilterTitle>
			<StyledFilterNationList>
				{nationProps.map((props, index) => {
					const { id, text, value } = props;
					return (
						<StyledFilterNationItem key={`filter-nation-${index}`}>
							<StyledFilterCheckbox type="checkbox" name="" id={id} className="hidden" value={value} />
							<StyledFilterLabel htmlFor={id}>{text}</StyledFilterLabel>
						</StyledFilterNationItem>
					);
				})}
			</StyledFilterNationList>
		</StyledFilter>
	);
}
