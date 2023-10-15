export interface ArticleDocsType {
	byline: {
		organization: string | null;
		original: string;
	};
	headline: {
		main: string;
	};
	pub_data: string;
	web_url: string;
}
export interface ArticleResponseType {
	status: string;
	response: {
		docs: ArticleDocsType[];
	};
}
