import { ArticleDocsType } from 'types/article';
import { create } from 'zustand';

interface ScrapStoreType {
	article: ArticleDocsType[];
	setArticle: (article: ArticleDocsType[]) => void;
}

export const scrapStore = create<ScrapStoreType>()((set) => ({
	article: JSON.parse(localStorage.getItem('scrap') || '[]'),
	setArticle: (article: ArticleDocsType[]) =>
		set(() => {
			localStorage.setItem('scrap', JSON.stringify(article));
			return { article: article };
		}),
}));
