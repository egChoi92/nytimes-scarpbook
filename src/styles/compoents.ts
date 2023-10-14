import styled from 'styled-components';

export const StyledSection = styled.section`
	flex: 1;
	overflow: auto;
	padding: 2.667vw 2.667vw 3.2vw;
	background-color: #f0f1f4;
`;

export const StyledFilter = styled.div`
	& + & {
		margin-top: 2.5rem;
	}
`;
export const StyledFilterTitle = styled.p`
	margin-bottom: 0.5rem;
	font-weight: 600;
	font-size: 1rem;
	line-height: 1.5;
	letter-spacing: -0.0313rem;
`;
export const StyledInput = styled.input`
	width: 100%;
	padding: 0.625rem 1.25rem;
	border-radius: 0.5rem;
	border: 1px solid #c4c4c4;
	&::placeholder {
		color: #c4c4c4;
	}
`;
