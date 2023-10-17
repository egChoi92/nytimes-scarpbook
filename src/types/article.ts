export interface ArticleDocsType {
	[key: string]: string | string[] | boolean;
	id: string;
	headline: string;
	organization: string;
	name: string;
	pub_date: string;
	link: string;
	glocations: string[];
	favored: boolean;
}
