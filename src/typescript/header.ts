// Header Functionality

namespace solbit.header {
	// Enable
	// This function is responsible for enabling the displaying of a "Custom Element" with a specified Header item
	export function Enable(headerItemElement: Element, customElement: Element): void | boolean {
		if ((typeof headerItemElement.tagName == "string") && (headerItemElement.tagName.toLowerCase() == "span")) { // If this is a Header span Element
			if (typeof customElement.tagName == "string") { // If customElement is indeed an Element
				headerItemElement.addEventListener("mouseup", solbit.header.Toggle.bind(this, headerItemElement, customElement)); // Have the Header Item listen to mouseup, with a Toggle with binded Elements
			}
		}
	}

	// Toggle
	// This function toggles the visibility of a Custom Element
	export function Toggle(headerItemElement: Element, customElement: Element) {
		console.log(arguments); // Debug arguments passed for now
		console.log(headerItemElement);
		console.log(customElement);
	}

}