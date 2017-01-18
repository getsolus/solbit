declare namespace solbit.header {
    function Enable(headerItemElement: Element, customElement: HTMLElement): void | boolean;
    function Toggle(headerItemElement: Element, customElement: HTMLElement): void;
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
