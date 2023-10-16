import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import Article from 'components/article/Article';
import LoadingFrame from 'components/frame/LoadingFrame';
import useObserver from 'hooks/useObserver';
import { filterStore } from 'store/filter';
import { StyledArticleWrapper } from 'styles/compoents';
import { formatDateToYYYYMMDD } from 'utils/date';

export default function Home() {
	const filter = filterStore((state) => state.filter);

	const organizedValue = (key: string, value: string | string[]) => {
		const stringValue = value.toString();
		if (!stringValue) return;
		switch (key) {
			case 'headline':
				return `("${value}")`;
			case 'glocations':
				return `(${value})`;
			case 'pub_date':
				return value;
		}
	};

	const filterQuery = (() => {
		const result = [];
		for (const key in filter) {
			const value = organizedValue(key, filter[key]);
			if (value) result.push(`${key}: ${value}`);
		}
		return result;
	})();

	const { data, isLoading, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
		queryKey: ['articlesearch'],
		queryFn: async ({ pageParam = 0 }) => {
			const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
				params: {
					'api-key': '9ghH7AWi1YROvIcweRg9fefUVsauLe0t',
					page: pageParam,
					fq: filterQuery.join(' AND '),
				},
			});
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
			pub_date: formatDateToYYYYMMDD(docs.pub_date),
			link: docs.web_url,
			glocations: filter.glocations,
			favored: false,
		};
	});
	return (
		<>
			<h2 className="hidden">홈</h2>
			<StyledArticleWrapper>
				{articleDocs?.map((docs, index) => <Article key={`home-article-${index}`} {...docs} />)}
			</StyledArticleWrapper>
			{(isLoading || isFetching) && <LoadingFrame />}
			<div ref={observerRef} />
		</>
	);
}
