import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import Article from 'components/article/Article';
import LoadingFrame from 'components/frame/LoadingFrame';
import useObserver from 'hooks/useObserver';

export default function Home() {
	const { data, isLoading, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
		queryKey: ['articlesearch'],
		queryFn: async ({ pageParam = 0 }) => {
			const response = await axios.get(
				`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=uoM5lto2NXmAe020vz9Ptt1OkkMMqujI&page=${pageParam}`,
			);
			return response;
		},
		getNextPageParam: (lastPage, pages) => {
			const nextPageParam = pages.length + 1;
			return lastPage.data.response.docs.length === 0 ? undefined : nextPageParam;
		},
		select: (data) => ({
			pages: data.pages.flatMap(({ data }) => data.response.docs),
			pageParams: data.pageParams,
		}),
	});

	const observerRef = useObserver(() => {
		hasNextPage && fetchNextPage();
	});

	const articleDocs = data?.pages.map((docs) => {
		return {
			headline: docs.headline.main,
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
			{articleDocs?.map((docs, index) => <Article key={`home-article-${index}`} {...docs} />)}
			{(isLoading || isFetching) && <LoadingFrame />}
			<div ref={observerRef} />
		</>
	);
}
