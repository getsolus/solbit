// Header Functionality
/// <reference path="position.ts" />
/// <reference path="render.ts" />

namespace solbit.header {
	// Enable
	// This function is responsible for enabling the displaying of a "Custom Element" with a specified Header item
	export function Enable(type: string, headerItemElement: Element, customElement: HTMLElement): boolean {
		let success: boolean = false;

		if ((type == "click") || (type == "hover")) { // Type is either click or hover
			if ((typeof headerItemElement.tagName == "string") && (headerItemElement.tagName.toLowerCase() == "span")) { // If this is a Header span Element
				if (typeof customElement.tagName == "string") { // If customElement is indeed an Element
					if (type == "click") {
						headerItemElement.addEventListener("mouseup", solbit.header.Toggle.bind(this, customElement)); // Have the Header Item listen to mouseup, with a Toggle with binded Element
					} else {
						headerItemElement.addEventListener("mouseenter", solbit.header.Toggle.bind(this, customElement, true)); // Have the Header Item listen to mouseenter, with a Toggle with the bunded Element
						customElement.addEventListener("mouseleave", solbit.header.Toggle.bind(this, customElement, false)); // Force hide the Custom Element when our mouse leaves the Custom Element
					}

					solbit.position.Register(["bottom", "center"], headerItemElement, customElement); // Register the headerItemElement and customElement
					success = true;
				}
			}
		}

		return success;
	}

	// Toggle
	// This function toggles the visibility of a Custom Element.
	// forceAction set to true will force show. forceAction set to false will force hide. No value passed enables dynamic toggle.
	export function Toggle(customElement: HTMLElement, forceAction?: boolean): void {
		solbit.render.HideAll(); // Hide all existing Elements to avoid clashing between multiple Custom Elements.
		solbit.position.Update(); // Update positions of elements
		solbit.render.ToggleDisplay(customElement, forceAction);
	}
}