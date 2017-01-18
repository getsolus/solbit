declare namespace solbit.header {
    function Enable(headerItemElement: Element, customElement: HTMLElement): void | boolean;
    function Toggle(headerItemElement: Element, customElement: HTMLElement): void;
}
interface RegisteredObject extends Object {
    Primary: Element;
    Secondary: HTMLElement;
    HorizontalPos: string;
    VerticalPos: string;
}
declare namespace solbit.position {
    var registered: RegisteredObject[];
    function Top(primaryElement: Element, secondaryElement: HTMLElement): void;
    function Bottom(primaryElement: Element, secondaryElement: HTMLElement): void;
    function Center(primaryElement: Element, secondaryElement: HTMLElement): void;
    function Register(positions: string[], primaryElement: Element, secondaryElement: HTMLElement): void;
    function Update(): void;
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
