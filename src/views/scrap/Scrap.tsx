import Article from 'components/article/Article';
import { StyledSection } from 'styles/compoents';

export default function Scrap() {
	const articleProps = [
		{
			headline: '국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”',
			organization: '조선일보',
			name: '김정확 기자',
			pub_date: '2023.10.14. (목)',
			link: 'https://www.naver.com/',
			favorited: false,
		},
	];
	return (
		<StyledSection>
			<h2 className="hidden">스크랩</h2>
			{articleProps.map((props, index) => (
				<Article key={`scrap-article-${index}`} {...props} />
			))}
		</StyledSection>
	);
}
