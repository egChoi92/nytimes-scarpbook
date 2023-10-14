import ImageHomeIconActive from 'assets/images/icon/home_active.svg';
import ImageHomeIconInactive from 'assets/images/icon/home_inactive.svg';
import ImageScrapIconActive from 'assets/images/icon/scrap_active.svg';
import ImageScrapIconInactive from 'assets/images/icon/scrap_inactive.svg';
import NavigationButton from 'components/navigation/NavigationButton';
import styled from 'styled-components';

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-around;
`;

export default function Navigation() {
	const navButtonProps = [
		{
			title: '홈',
			link: '/',
			activeIconSrc: ImageHomeIconActive,
			inactiveIconSrc: ImageHomeIconInactive,
		},
		{
			title: '스크랩',
			link: '/scrap',
			activeIconSrc: ImageScrapIconActive,
			inactiveIconSrc: ImageScrapIconInactive,
		},
	];

	return (
		<StyledNav>
			{navButtonProps.map((props, index) => (
				<NavigationButton key={`navigation-button-${index}`} {...props} />
			))}
		</StyledNav>
	);
}
