import Article from 'components/article/Article';
import { scrapStore } from 'store/article';
import { filterStore } from 'store/filter';
import ScrapEmpty from 'views/scrap/ScrapEmpty';

export default function Scrap() {
	const filter = filterStore((state) => state.filter);
	const scrapArticle = scrapStore((state) => state.article);

	const filteredScrapArticle = scrapArticle.filter((article) => {
		const matchedHeadline = article['headline'].indexOf(filter['headline']) >= 0;
		const matchedPubDate = article['pub_date'].indexOf(filter['pub_date']) >= 0;
		const matchedLocations = filter['glocations']
			.map((item) => article['glocations'].includes(item))
			.every((item) => item === true);

		return matchedHeadline && matchedPubDate && matchedLocations;
	});

	return (
		<>
			<h2 className="hidden">스크랩</h2>
			{filteredScrapArticle.length === 0 ? (
				<ScrapEmpty />
			) : (
				filteredScrapArticle.map((props, index) => <Article key={`scrap-article-${index}`} {...props} />)
			)}
		</>
	);
}
