import ImageIconFavoriteActive from 'assets/images/icon/favorite_active.svg';
import ImageIconFavoriteInactive from 'assets/images/icon/favorite_inactive.svg';
import { useState } from 'react';
import styled from 'styled-components';

interface PropsType {
	favorited: boolean;
}

const StyledFavoriteButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.5rem;
	height: 1.5rem;
`;
export default function ArticleFavoriteButton({ favorited }: PropsType) {
	const [isFavorite, setIsFavorite] = useState(favorited);

	const handleFavoriteToggle = () => {
		setIsFavorite(!isFavorite);
	};

	const imageConfig = {
		src: isFavorite ? ImageIconFavoriteActive : ImageIconFavoriteInactive,
		alt: isFavorite ? '스크랩된 기사를 뜻하는 노란색으로 채워진 별' : '스크랩되지 않은 기사를 뜻하는 테두리만 있는 별',
	};

	return (
		<StyledFavoriteButton type="button" onClick={handleFavoriteToggle}>
			<img src={imageConfig.src} alt={imageConfig.alt} />
		</StyledFavoriteButton>
	);
}
