// Interfaces used in Solbit

// RegisteredObject
// RegisteredObject describes an Object registered in our Positioning system.
interface RegisteredObject extends Object {
	Primary: Element;
	Secondary: HTMLElement;
	HorizontalPos: string;
	VerticalPos: string;
}

// SearchData
// SearchData describes an Object bound to specific Search-related events.
interface SearchData extends Object {
	Searchbox: HTMLInputElement;
	ResultsView: HTMLElement;
	ResultsFunc: Function;
}

// SearchResult
// SearchResult describes an Object with specific attributes by our Searchbox implementation.
interface SearchResult extends Object {
	Title: string;
	Description: string;
	URL: string;
}