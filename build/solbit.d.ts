interface RegisteredObject extends Object {
    Primary: Element;
    Secondary: HTMLElement;
    HorizontalPos: string;
    VerticalPos: string;
}
interface SearchData extends Object {
    Searchbox: HTMLInputElement;
    ResultsView: HTMLElement;
    ResultsFunc: Function;
}
interface SearchResult extends Object {
    Title: string;
    Description: string;
    URL: string;
}
declare namespace solbit.position {
    var registered: RegisteredObject[];
    function Top(primaryElement: Element, secondaryElement: HTMLElement): void;
    function Bottom(primaryElement: Element, secondaryElement: HTMLElement): void;
    function Center(primaryElement: Element, secondaryElement: HTMLElement): void;
    function Register(positions: string[], primaryElement: Element, secondaryElement: HTMLElement): void;
    function Update(): void;
}
declare namespace solbit.render {
    function HideAll(): void;
    function ToggleDisplay(element: HTMLElement, forceAction?: boolean): void;
}
declare namespace solbit.header {
    function Enable(type: string, headerItemElement: Element, customElement: HTMLElement): boolean;
    function Toggle(headerItemElement: Element, customElement: HTMLElement, forceAction?: boolean): void;
}
declare namespace solbit.searchbox {
    function Enable(searchbox: HTMLInputElement, resultsview: HTMLElement, resultsFunc: () => SearchResult[]): boolean;
    function Search(searchData: SearchData): void;
}
declare namespace solbit.sidepane {
    var Container: Element;
    var SidepaneButton: Element;
    var ContentOverlay: Element;
    function Enable(): void;
    function Toggle(): void;
}
declare namespace solbit {
    function Init(): void;
}
