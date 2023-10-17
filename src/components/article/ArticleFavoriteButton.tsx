import ImageIconFavoredActive from 'assets/images/icon/favorite_active.svg';
import ImageIconFavoredInactive from 'assets/images/icon/favorite_inactive.svg';
import { scrapStore } from 'store/article';
import styled from 'styled-components';
import { ArticleDocsType } from 'types/article';

const StyledFavoredButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.5rem;
	height: 1.5rem;
`;
export default function ArticleFavoredButton({ article }: { article: ArticleDocsType }) {
	const { favored } = article;
	const scrapState = {
		article: scrapStore((state) => state.article),
		setArticle: scrapStore((state) => state.setArticle),
	};

	const handleFavoredToggle = () => {
		const newScrap = !favored
			? [...scrapState.article, { ...article, favored: !favored }]
			: scrapState.article.filter((item) => item.id !== article.id);
		scrapState.setArticle(newScrap);
	};

	const imageConfig = {
		src: favored ? ImageIconFavoredActive : ImageIconFavoredInactive,
		alt: favored ? '스크랩된 기사를 뜻하는 노란색으로 채워진 별' : '스크랩되지 않은 기사를 뜻하는 테두리만 있는 별',
	};

	return (
		<StyledFavoredButton type="button" onClick={() => handleFavoredToggle()}>
			<img src={imageConfig.src} alt={imageConfig.alt} />
		</StyledFavoredButton>
	);
}
