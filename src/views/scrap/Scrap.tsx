import Article from 'components/article/Article';
import { scrapStore } from 'store/article';
import ScrapEmpty from 'views/scrap/ScrapEmpty';

export default function Scrap() {
	const scrapArticle = scrapStore((state) => state.article);
	console.log('scrapArticle: ', scrapArticle);

	return (
		<>
			<h2 className="hidden">스크랩</h2>
			{scrapArticle.length === 0 ? (
				<ScrapEmpty />
			) : (
				scrapArticle.map((props, index) => <Article key={`scrap-article-${index}`} {...props} />)
			)}
		</>
	);
}
