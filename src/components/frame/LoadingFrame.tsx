import styled from 'styled-components';

const StyledLoading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default function LoadingFrame() {
	return (
		<StyledLoading>
			<h1>정보를 불러오는 중입니다</h1>
		</StyledLoading>
	);
}
