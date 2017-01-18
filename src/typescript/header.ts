// Header Functionality

namespace solbit.header {
	// Enable
	// This function is responsible for enabling the displaying of a "Custom Element" with a specified Header item
	export function Enable(headerItemElement: Element, customElement: HTMLElement): void | boolean {
		if ((typeof headerItemElement.tagName == "string") && (headerItemElement.tagName.toLowerCase() == "span")) { // If this is a Header span Element
			if (typeof customElement.tagName == "string") { // If customElement is indeed an Element
				headerItemElement.addEventListener("mouseup", solbit.header.Toggle.bind(this, headerItemElement, customElement)); // Have the Header Item listen to mouseup, with a Toggle with binded Elements
				solbit.position.Register(["center", "bottom"], headerItemElement, customElement); // Register the headerItemElement and customElement
			}
		}
	}

	// Toggle
	// This function toggles the visibility of a Custom Element
	export function Toggle(headerItemElement: Element, customElement: HTMLElement) {
		if (!customElement.hasAttribute("data-solbit-show")) { // If we aren't already force showing customElement
			solbit.position.Bottom(headerItemElement, customElement);
			solbit.position.Center(headerItemElement, customElement);

			customElement.setAttribute("data-solbit-show", ""); // Add data-solbit-show to customElement
		} else { // If we are already showing the customElement
			customElement.removeAttribute("data-solbit-show"); // Hide away.
		}
	}

}