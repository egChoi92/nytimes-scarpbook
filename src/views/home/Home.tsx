import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Article from 'components/article/Article';
import LoadingFrame from 'components/frame/LoadingFrame';
import { ArticleResponseType } from 'types/article';

export default function Home() {
	const { data, isLoading } = useQuery<ArticleResponseType>({
		queryKey: ['articlesearch'],
		queryFn: () => {
			return axios
				.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=uoM5lto2NXmAe020vz9Ptt1OkkMMqujI')
				.then((response) => response.data)
				.catch((error) => error);
		},
	});

	if (isLoading) {
		return <LoadingFrame />;
	}
	if (data) {
		const articleDocs = data.response.docs.map((docs) => {
			return {
				title: docs.headline.main,
				organization: docs.byline.organization,
				name: docs.byline.original,
				date: docs.pub_data,
				link: docs.web_url,
				favorited: false,
			};
		});
		return (
			<>
				<h2 className="hidden">홈</h2>
				{articleDocs.map((docs, index) => (
					<Article key={`home-article-${index}`} {...docs} />
				))}
			</>
		);
	}
}
