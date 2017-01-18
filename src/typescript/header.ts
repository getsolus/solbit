// Header Functionality

namespace solbit.header {
	// Enable
	// This function is responsible for enabling the displaying of a "Custom Element" with a specified Header item
	export function Enable(headerItemElement: Element, customElement: HTMLElement): void | boolean {
		if ((typeof headerItemElement.tagName == "string") && (headerItemElement.tagName.toLowerCase() == "span")) { // If this is a Header span Element
			if (typeof customElement.tagName == "string") { // If customElement is indeed an Element
				headerItemElement.addEventListener("mouseup", solbit.header.Toggle.bind(this, headerItemElement, customElement)); // Have the Header Item listen to mouseup, with a Toggle with binded Elements
			}
		}
	}

	// Toggle
	// This function toggles the visibility of a Custom Element
	export function Toggle(headerItemElement: Element, customElement: HTMLElement) {
		if (!customElement.hasAttribute("data-solbit-show")) { // If we aren't already force showing customElement
			let headerItemLocation: ClientRect = headerItemElement.getClientRects()[0]; // Get the ClientRect Object of the headerItemElement
			let headerItemX: number = headerItemLocation.left; // Get the headerItemElement's x position
			let headerItemY: number = headerItemLocation.bottom; // Get the Y value of the bottom of the headerItemElement

			let customElementWidth: number = customElement.getClientRects()[0].width; // Get the width of the customElement via getClientRects

			customElement.style.top = headerItemY.toString() + "px"; // Set the Custom Element to the headerItem bottom edge (Y position)

			// TODO: Stop assuming headerItemElement is smaller than customElement
			customElement.style.left = (headerItemX - ((customElementWidth - headerItemLocation.width) / 2)).toString() + "px"; // Essentially, subtract from the X position the offset, based on the width of the Custom Element minus the width of the header item, divided by two (center)

			customElement.setAttribute("data-solbit-show", ""); // Add data-solbit-show to customElement
		} else { // If we are already showing the customElement
			customElement.removeAttribute("data-solbit-show"); // Hide away.
		}

	}

}