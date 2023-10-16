import { initialFilterState } from 'constants/filter';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { filterStore } from 'store/filter';
import styled from 'styled-components';

const StyledNavigationButton = styled.button`
	display: block;
	padding: 1.25rem;
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
	const filterState = {
		setFilter: filterStore((state) => state.setFilter),
	};

	const navigate = useNavigate();
	const location = useLocation();
	const [isActive, setIsActive] = useState(false);

	const handleNavigate = (link: string) => {
		filterState.setFilter(initialFilterState);
		navigate(link);
	};

	useEffect(() => {
		setIsActive(location.pathname === link);
	}, [location.pathname, link]);

	return (
		<StyledNavigationButton
			className={`${isActive && 'is-active'}`}
			onClick={() => handleNavigate(link)}
			title={`${title} 바로가기`}
		>
			<img src={isActive ? activeIconSrc : inactiveIconSrc} alt="" />
			<p>{title}</p>
		</StyledNavigationButton>
	);
}
