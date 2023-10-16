import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledNavigationButton = styled.button`
	display: block;
	text-align: center;
	color: #6d6d6d;
	&.is-active {
		color: #fff;
	}
	& > p {
		margin-top: 0.5rem;
		font-size: 0.625rem;
		font-weight: 600;
		line-height: 1.2;
	}
`;

interface PropsType {
	title: string;
	link: string;
	activeIconSrc: string;
	inactiveIconSrc: string;
}

export default function NavigationButton({ title, link, activeIconSrc, inactiveIconSrc }: PropsType) {
	const navigate = useNavigate();
	const location = useLocation();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		setIsActive(location.pathname === link);
	}, [location.pathname, link]);

	return (
		<StyledNavigationButton
			className={`${isActive && 'is-active'}`}
			onClick={() => navigate(link)}
			title={`${title} 바로가기`}
		>
			<img src={isActive ? activeIconSrc : inactiveIconSrc} alt="" />
			<p>{title}</p>
		</StyledNavigationButton>
	);
}
