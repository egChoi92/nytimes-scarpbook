import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';

interface PropsType {
	title: string;
	link: string;
	activeIconSrc: string;
	inactiveIconSrc: string;
}

const StyledNavigationButton = styled.button<{ $isActive: boolean }>`
	display: block;
	text-align: center;
	color: ${(props) => (props.$isActive ? ' #fff' : '#6d6d6d')};
	& > p {
		margin-top: 0.5rem;
		font-size: 0.625rem;
		font-weight: 600;
		line-height: 1.2;
	}
`;

export default function NavigationButton({ title, link, activeIconSrc, inactiveIconSrc }: PropsType) {
	const navigate = useNavigate();
	const location = useLocation();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		setIsActive(location.pathname === link);
	}, [location.pathname, link]);

	return (
		<StyledNavigationButton $isActive={isActive} onClick={() => navigate(link)} title={`${title} 바로가기`}>
			<img src={isActive ? activeIconSrc : inactiveIconSrc} alt="" />
			<p>{title}</p>
		</StyledNavigationButton>
	);
}
