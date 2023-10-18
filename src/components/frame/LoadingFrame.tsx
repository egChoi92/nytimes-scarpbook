import styled, { keyframes } from 'styled-components';

const KeyframesRotate = keyframes`
	100% {
	transform: rotate(360deg);
	}
`;
const StyledLoading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
const StyledLoadingBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledLoadingIcon = styled.div`
	width: 50px;
	height: 50px;
	border: 0.5rem solid #3478f6;
	border-top: 0.5rem solid #c4c4c4;
	border-radius: 100%;
	animation: ${KeyframesRotate} 1s infinite linear;
`;

export default function LoadingFrame() {
	return (
		<StyledLoading>
			<StyledLoadingBox>
				<StyledLoadingIcon />
			</StyledLoadingBox>
		</StyledLoading>
	);
}
