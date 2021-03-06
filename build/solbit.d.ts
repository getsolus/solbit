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
    Type: string;
}
interface SearchResult extends Object {
    Description?: string;
    DocumentTitle: string;
    Path: string;
}
declare namespace solbit.position {
    var registered: RegisteredObject[];
    function Top(primaryElement: Element, secondaryElement: HTMLElement): void;
    function Bottom(primaryElement: Element, secondaryElement: HTMLElement): void;
    function Center(primaryElement: any, secondaryElement: any): void;
    function Register(positions: string[], primaryElement: Element, secondaryElement: HTMLElement): void;
    function Update(): void;
}
declare namespace solbit.render {
    function HideAll(): void;
    function ToggleDisplay(element: HTMLElement, forceAction?: boolean): void;
}
declare namespace solbit.header {
    function Enable(type: string, headerItemElement: Element, customElement: HTMLElement): boolean;
    function Toggle(customElement: HTMLElement, forceAction?: boolean): void;
}
declare namespace solbit.searchbox {
    var CurrentInputLength: number;
    function Enable(searchbox: any, resultsview: any, type: string, resultsFunc: (query: string, searchData: SearchData) => void): boolean;
    function CloseResultsView(resultsview: any): void;
    function ShowResults(searchData: SearchData): void;
    function Search(searchData: SearchData): void;
    function Propagate(results: SearchResult[], searchData: SearchData): void;
}
declare namespace solbit.sidepane {
    var Container: Element;
    var SidepaneButton: Element;
    var ContentOverlay: Element;
    function Enable(): void;
    function IsVisible(): boolean;
    function Toggle(): void;
}
declare namespace solbit {
    function Init(): void;
}
