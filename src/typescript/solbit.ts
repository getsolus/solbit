// Solbit Functionality
/// <reference path="header.ts" />
/// <reference path="position.ts" />
/// <reference path="sidepane.ts" />

namespace solbit {
	// Init
	export function Init(): void {
		solbit.sidepane.Enable(); // Enable the Sidepane
		window.addEventListener("resize", solbit.position.Update); // Ensure we do Update positions on window resize
	}
}