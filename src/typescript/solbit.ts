// Solbit Functionality
/// <reference path="header.ts" />
/// <reference path="interfaces.ts" />
/// <reference path="position.ts" />
/// <reference path="render.ts" />
/// <reference path="searchbox.ts" />
/// <reference path="sidepane.ts" />

namespace solbit {
	// Init
	export function Init(): void {
		solbit.sidepane.Enable(); // Enable the Sidepane

		let headerElement: HTMLElement = document.body.querySelector("header");

		if (headerElement !== null) { // If we have a header
			headerElement.addEventListener("mouseleave", solbit.render.HideAll);
		}

		window.addEventListener("resize", solbit.position.Update); // Ensure we do Update positions on window resize
	}
}