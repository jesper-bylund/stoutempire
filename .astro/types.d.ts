declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"2018-10-20-organic-chocolate-stout.md": {
	id: "2018-10-20-organic-chocolate-stout.md";
  slug: "2018-10-20-organic-chocolate-stout";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018-10-27-stout-at-the-devil.md": {
	id: "2018-10-27-stout-at-the-devil.md";
  slug: "2018-10-27-stout-at-the-devil";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018-11-14-smoky-cacao.md": {
	id: "2018-11-14-smoky-cacao.md";
  slug: "2018-11-14-smoky-cacao";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018-11-17-cinna-mon.md": {
	id: "2018-11-17-cinna-mon.md";
  slug: "2018-11-17-cinna-mon";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018-11-17-cybernaut.md": {
	id: "2018-11-17-cybernaut.md";
  slug: "2018-11-17-cybernaut";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018-11-30-battle-hammer.md": {
	id: "2018-11-30-battle-hammer.md";
  slug: "2018-11-30-battle-hammer";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018-11-30-feasting-with-panthers.md": {
	id: "2018-11-30-feasting-with-panthers.md";
  slug: "2018-11-30-feasting-with-panthers";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018-11-30-trouble-sleep.md": {
	id: "2018-11-30-trouble-sleep.md";
  slug: "2018-11-30-trouble-sleep";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2018-12-01-best-when-moist.md": {
	id: "2018-12-01-best-when-moist.md";
  slug: "2018-12-01-best-when-moist";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-01-19-amurga.md": {
	id: "2019-01-19-amurga.md";
  slug: "2019-01-19-amurga";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-01-19-cocoanut-porter.md": {
	id: "2019-01-19-cocoanut-porter.md";
  slug: "2019-01-19-cocoanut-porter";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-01-19-golden-delicious-2018.md": {
	id: "2019-01-19-golden-delicious-2018.md";
  slug: "2019-01-19-golden-delicious-2018";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-01-19-lost-variation.md": {
	id: "2019-01-19-lost-variation.md";
  slug: "2019-01-19-lost-variation";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-01-19-swedish-wash.md": {
	id: "2019-01-19-swedish-wash.md";
  slug: "2019-01-19-swedish-wash";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-05-10-death-by-coconut.md": {
	id: "2019-05-10-death-by-coconut.md";
  slug: "2019-05-10-death-by-coconut";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-05-17-aniara.md": {
	id: "2019-05-17-aniara.md";
  slug: "2019-05-17-aniara";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-12-28-beer-geek-dessert.md": {
	id: "2019-12-28-beer-geek-dessert.md";
  slug: "2019-12-28-beer-geek-dessert";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-12-28-dessert-in-a-can-45-cookies--cream.md": {
	id: "2019-12-28-dessert-in-a-can-45-cookies--cream.md";
  slug: "2019-12-28-dessert-in-a-can-45-cookies--cream";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-12-28-zygoat.md": {
	id: "2019-12-28-zygoat.md";
  slug: "2019-12-28-zygoat";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-12-29-rodenbach-fruitage.md": {
	id: "2019-12-29-rodenbach-fruitage.md";
  slug: "2019-12-29-rodenbach-fruitage";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2019-12-29-smorbidly-obese.md": {
	id: "2019-12-29-smorbidly-obese.md";
  slug: "2019-12-29-smorbidly-obese";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020-03-27-export-stout-raspberry.md": {
	id: "2020-03-27-export-stout-raspberry.md";
  slug: "2020-03-27-export-stout-raspberry";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-06-22-kapuziner-weibier.md": {
	id: "2023-06-22-kapuziner-weibier.md";
  slug: "2023-06-22-kapuziner-weibier";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-06-30-cookies--corpsepaint-imperial-girl-scout-edition.md": {
	id: "2023-06-30-cookies--corpsepaint-imperial-girl-scout-edition.md";
  slug: "2023-06-30-cookies--corpsepaint-imperial-girl-scout-edition";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-06-30-kentucky-swirl.md": {
	id: "2023-06-30-kentucky-swirl.md";
  slug: "2023-06-30-kentucky-swirl";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-07-07-blanche-de-bruxelles.md": {
	id: "2023-07-07-blanche-de-bruxelles.md";
  slug: "2023-07-07-blanche-de-bruxelles";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-07-07-chimay-grande-rserve-blue.md": {
	id: "2023-07-07-chimay-grande-rserve-blue.md";
  slug: "2023-07-07-chimay-grande-rserve-blue";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-07-08-must-kuld-chai-latte.md": {
	id: "2023-07-08-must-kuld-chai-latte.md";
  slug: "2023-07-08-must-kuld-chai-latte";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-07-08-must-kuld-paper-mill.md": {
	id: "2023-07-08-must-kuld-paper-mill.md";
  slug: "2023-07-08-must-kuld-paper-mill";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-08-11-der-anfang-ist-das-ende452020.md": {
	id: "2023-08-11-der-anfang-ist-das-ende452020.md";
  slug: "2023-08-11-der-anfang-ist-das-ende452020";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-08-18-crust-to-core-2021.md": {
	id: "2023-08-18-crust-to-core-2021.md";
  slug: "2023-08-18-crust-to-core-2021";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-08-18-rot.md": {
	id: "2023-08-18-rot.md";
  slug: "2023-08-18-rot";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-09-06-midgardsormen.md": {
	id: "2023-09-06-midgardsormen.md";
  slug: "2023-09-06-midgardsormen";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-10-07-banoffee-banger.md": {
	id: "2023-10-07-banoffee-banger.md";
  slug: "2023-10-07-banoffee-banger";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-12-16-delirium-nol--christmas-2023.md": {
	id: "2023-12-16-delirium-nol--christmas-2023.md";
  slug: "2023-12-16-delirium-nol--christmas-2023";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-12-24-as-above-so-below.md": {
	id: "2023-12-24-as-above-so-below.md";
  slug: "2023-12-24-as-above-so-below";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-12-24-superior.md": {
	id: "2023-12-24-superior.md";
  slug: "2023-12-24-superior";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-12-25-strudel-stout-cellar-series.md": {
	id: "2023-12-25-strudel-stout-cellar-series.md";
  slug: "2023-12-25-strudel-stout-cellar-series";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-12-27-blueberry-drip.md": {
	id: "2023-12-27-blueberry-drip.md";
  slug: "2023-12-27-blueberry-drip";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-12-27-cacao.md": {
	id: "2023-12-27-cacao.md";
  slug: "2023-12-27-cacao";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-12-30-no-comma-before-please.md": {
	id: "2023-12-30-no-comma-before-please.md";
  slug: "2023-12-30-no-comma-before-please";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-12-30-santa-claws-cinnamon-buns.md": {
	id: "2023-12-30-santa-claws-cinnamon-buns.md";
  slug: "2023-12-30-santa-claws-cinnamon-buns";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-02-29-frosty.md": {
	id: "2024-02-29-frosty.md";
  slug: "2024-02-29-frosty";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-02-29-stone-imperial-stout-2022.md": {
	id: "2024-02-29-stone-imperial-stout-2022.md";
  slug: "2024-02-29-stone-imperial-stout-2022";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-03-09-beer-geek-konfekt.md": {
	id: "2024-03-09-beer-geek-konfekt.md";
  slug: "2024-03-09-beer-geek-konfekt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-03-09-provocator.md": {
	id: "2024-03-09-provocator.md";
  slug: "2024-03-09-provocator";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-03-10-common-ground.md": {
	id: "2024-03-10-common-ground.md";
  slug: "2024-03-10-common-ground";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-01-tripel-de-garre.md": {
	id: "2024-04-01-tripel-de-garre.md";
  slug: "2024-04-01-tripel-de-garre";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-05-gulden-draak-9000-quadruple.md": {
	id: "2024-04-05-gulden-draak-9000-quadruple.md";
  slug: "2024-04-05-gulden-draak-9000-quadruple";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-07-extra-special-bitter.md": {
	id: "2024-04-07-extra-special-bitter.md";
  slug: "2024-04-07-extra-special-bitter";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-07-mexican-chocolate-dark-ale.md": {
	id: "2024-04-07-mexican-chocolate-dark-ale.md";
  slug: "2024-04-07-mexican-chocolate-dark-ale";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-07-quimera-mexican-chocolate-dark-ale.md": {
	id: "2024-04-07-quimera-mexican-chocolate-dark-ale.md";
  slug: "2024-04-07-quimera-mexican-chocolate-dark-ale";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-07-trindade-45-urea.md": {
	id: "2024-04-07-trindade-45-urea.md";
  slug: "2024-04-07-trindade-45-urea";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-12-albino-stout.md": {
	id: "2024-04-12-albino-stout.md";
  slug: "2024-04-12-albino-stout";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-12-helles-yeah.md": {
	id: "2024-04-12-helles-yeah.md";
  slug: "2024-04-12-helles-yeah";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-12-long-way-from-home.md": {
	id: "2024-04-12-long-way-from-home.md";
  slug: "2024-04-12-long-way-from-home";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-25-gingerbeer.md": {
	id: "2024-04-25-gingerbeer.md";
  slug: "2024-04-25-gingerbeer";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-04-27-spring-weiss.md": {
	id: "2024-04-27-spring-weiss.md";
  slug: "2024-04-27-spring-weiss";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2024-05-04-chocobuster.md": {
	id: "2024-05-04-chocobuster.md";
  slug: "2024-05-04-chocobuster";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
