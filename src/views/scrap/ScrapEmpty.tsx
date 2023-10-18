import ImageScrapIconInactive from 'assets/images/icon/scrap_inactive.svg';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { StyledSubmitButton } from 'styles/compoents';

const StyledScrapEmpty = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 88.05970149253731%;
	max-width: 295px;
	height: 100%;
	margin: auto;
	text-align: center;
`;
const StyledScrapEmptyText = styled.p`
	margin-top: 0.5rem;
	margin-bottom: 1.25rem;
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 1.5555555555555556;
	color: #6d6d6d;
`;

export default function ScrapEmpty() {
	const navigate = useNavigate();
	return (
		<StyledScrapEmpty>
			<img src={ImageScrapIconInactive} alt="" />
			<StyledScrapEmptyText>저장된 스크랩이 없습니다.</StyledScrapEmptyText>
			<StyledSubmitButton type="button" onClick={() => navigate('/')}>
				스크랩 하러 가기
			</StyledSubmitButton>
		</StyledScrapEmpty>
	);
}
