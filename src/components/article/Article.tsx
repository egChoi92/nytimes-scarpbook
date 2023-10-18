import ArticleFavoriteButton from 'components/article/ArticleFavoriteButton';
import styled from 'styled-components';
import { ArticleDocsType } from 'types/article';

const StyledArticle = styled.article`
	padding: 0.625rem 1.25rem;
	border-radius: 0.5rem;
	background-color: #fff;
	letter-spacing: -0.0313rem;
	& + & {
		margin-top: 0.5rem;
	}
`;
const StyledHead = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;
const StyledLink = styled.a`
	display: box;
	display: -webkit-box;
	overflow: hidden;
	padding-right: 0.625rem;
	font-size: 1.125rem;
	font-weight: 600;
	line-height: 1.5555555555555556;
	word-wrap: break-word;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;
const StyledBody = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.5rem;
	font-size: 13px;
	line-height: 1.5384615384615385;
`;
const StyledReporter = styled.p`
	span + span {
		margin-left: 0.5rem;
	}
`;
const StyledDate = styled.p`
	color: #6d6d6d;
`;

export default function Article(props: ArticleDocsType) {
	const { headline, organization, name, pub_date, link } = props;

	return (
		<StyledArticle>
			<StyledHead>
				<StyledLink href={link}>{headline}</StyledLink>
				<ArticleFavoriteButton article={props} />
			</StyledHead>
			<StyledBody>
				<StyledReporter>
					{organization && <span>{organization}</span>}
					<span>{name}</span>
				</StyledReporter>
				<StyledDate>{pub_date}</StyledDate>
			</StyledBody>
		</StyledArticle>
	);
}
