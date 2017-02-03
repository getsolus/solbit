// Header Functionality
/// <reference path="position.ts" />

namespace solbit.header {
	// Enable
	// This function is responsible for enabling the displaying of a "Custom Element" with a specified Header item
	export function Enable(type: string, headerItemElement: Element, customElement: HTMLElement): void | boolean {
		let success: boolean = false;

		if ((type == "click") || (type == "hover")) { // Type is either click or hover
			if ((typeof headerItemElement.tagName == "string") && (headerItemElement.tagName.toLowerCase() == "span")) { // If this is a Header span Element
				if (typeof customElement.tagName == "string") { // If customElement is indeed an Element
					if (type == "click") {
						headerItemElement.addEventListener("mouseup", solbit.header.Toggle.bind(this, headerItemElement, customElement)); // Have the Header Item listen to mouseup, with a Toggle with binded Element
					} else {
						headerItemElement.addEventListener("mouseenter", solbit.header.Toggle.bind(this, headerItemElement, customElement, true)); // Have the Header Item listen to mouseenter, with a Toggle with the bunded Element
						customElement.addEventListener("mouseleave", solbit.header.Toggle.bind(this, headerItemElement, customElement, false)); // Force hide the Custom Element when our mouse leaves the Custom Element
					}

					solbit.position.Register(["center", "bottom"], headerItemElement, customElement); // Register the headerItemElement and customElement
					success = true;
				}
			}
		}

		return success;
	}

	// HideAll
	// This function will hide all Custom Elements
	export function HideAll() {
		for (let registeredObject of solbit.position.registered) { // For each registeredObject of the registered Objects
			registeredObject.Secondary.removeAttribute("data-solbit-show"); // Hide the Element. No need to call Toggle.
		}
	}

	// Toggle
	// This function toggles the visibility of a Custom Element.
	// forceAction set to true will force show. forceAction set to false will force hide. No value passed enables dynamic toggle.
	export function Toggle(headerItemElement: Element, customElement: HTMLElement, forceAction?: boolean) {
		if (forceAction == undefined) { // If no value is passed
			forceAction = !customElement.hasAttribute("data-solbit-show"); // Set forceAction to inverse value of has attribute. If it doesn't, show. If it does, hide.
		}

		if (forceAction) { // If we're going to show the Element
			solbit.header.HideAll(); // Hide all existing Elements to avoid clashing between multiple Custom Elements.
			solbit.position.Bottom(headerItemElement, customElement);
			solbit.position.Center(headerItemElement, customElement);

			customElement.setAttribute("data-solbit-show", ""); // Add data-solbit-show to customElement
		} else { // If we're going to hide the Element.
			customElement.removeAttribute("data-solbit-show"); // Hide away.
		}
	}

}