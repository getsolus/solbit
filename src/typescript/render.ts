// Solbit Rendering Functions
/// <reference path="position.ts" />

namespace solbit.render {
	// HideAll
	// This function will hide all Custom Elements
	export function HideAll(): void {
		for (let registeredObject of solbit.position.registered) { // For each registeredObject of the registered Objects
			registeredObject.Secondary.removeAttribute("data-solbit-show"); // Hide the Element. No need to call ToggleDisplay.
		}
	}

	// ToggleDisplay
	// This function will show or hide an Element based on its current state
	export function ToggleDisplay(element: HTMLElement, forceAction?: boolean) {
		if (forceAction == undefined) { // If no value is passed
			forceAction = !element.hasAttribute("data-solbit-show"); // Set forceAction to inverse value of has attribute. If it doesn't, show. If it does, hide.
		}

		if (forceAction) { // If we're going to show the Element
			element.setAttribute("data-solbit-show", ""); // Add data-solbit-show to element
		} else { // If we're going to hide the Element.
			element.removeAttribute("data-solbit-show"); // Hide away.
		}
	}
}