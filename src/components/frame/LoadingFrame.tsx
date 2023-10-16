import styled, { keyframes } from 'styled-components';

const KeyframesRotate = keyframes`
  0% {
	width: 0;
  }
  100% {
	width: 100%;
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
	font-size: 0.875rem;
	text-align: center;
	color: #6d6d6d;
`;

const StyledLoadingBar = styled.div`
	width: 100px;
	height: 8px;
	margin-top: 0.625rem;
	border: 1px solid #6d6d6d;
	border-radius: 4px;
	position: relative;
`;
const StyledLoadingIcon = styled.div`
	height: 100%;
	border-radius: 0 5px 5px 0;
	background-color: #3478f6;
	animation: ${KeyframesRotate} 2s infinite linear;
`;

export default function LoadingFrame() {
	return (
		<StyledLoading>
			<StyledLoadingBox>
				Loading...
				<StyledLoadingBar>
					<StyledLoadingIcon />
				</StyledLoadingBar>
			</StyledLoadingBox>
		</StyledLoading>
	);
}
