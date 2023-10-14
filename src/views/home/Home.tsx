import Article from 'components/article/Article';
import { StyledSection } from 'styles/compoents';

export default function Home() {
	const articleProps = [
		{
			title: '국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작 논란에 휩싸여”',
			organization: '조선일보',
			name: '김정확 기자',
			date: '2023.10.14. (목)',
			link: 'https://www.naver.com/',
			favorited: false,
		},
		{
			title: '국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”',
			organization: '조선일보',
			name: '김정확 기자',
			date: '2023.10.14. (목)',
			link: 'https://www.naver.com/',
			favorited: false,
		},
		{
			title: '국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”',
			organization: '조선일보',
			name: '김정확 기자',
			date: '2023.10.14. (목)',
			link: 'https://www.naver.com/',
			favorited: false,
		},
		{
			title: '국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”',
			organization: '조선일보',
			name: '김정확 기자',
			date: '2023.10.14. (목)',
			link: 'https://www.naver.com/',
			favorited: false,
		},
		{
			title: '국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”',
			organization: '조선일보',
			name: '김정확 기자',
			date: '2023.10.14. (목)',
			link: 'https://www.naver.com/',
			favorited: false,
		},
		{
			title: '국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”',
			organization: '조선일보',
			name: '김정확 기자',
			date: '2023.10.14. (목)',
			link: 'https://www.naver.com/',
			favorited: false,
		},
		{
			title: '국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”',
			organization: '조선일보',
			name: '김정확 기자',
			date: '2023.10.14. (목)',
			link: 'https://www.naver.com/',
			favorited: false,
		},
	];
	return (
		<StyledSection>
			<h2 className="hidden">홈</h2>
			{articleProps.map((props, index) => (
				<Article key={`home-article-${index}`} {...props} />
			))}
		</StyledSection>
	);
}
