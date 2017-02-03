// Solbit Sidepane Functionality

namespace solbit.sidepane {
	export var Container: Element;
	export var SidepaneButton: Element;
	export var ContentOverlay: Element;

	// Enabling the Sidepane
	export function Enable(): void {
		solbit.sidepane.SidepaneButton = document.querySelector('header > div[data-solbit="button"]'); // Get Sidepane Button

		if (solbit.sidepane.SidepaneButton !== null) { // If the SidepaneButton is defined
			solbit.sidepane.Container = document.querySelector('div[data-solbit="sidepane"]'); // Get Sidepane
			solbit.sidepane.ContentOverlay = document.querySelector('div[data-solbit="content-overlay"]'); // Get Content Overlay

			solbit.sidepane.SidepaneButton.addEventListener("mouseup", solbit.sidepane.Toggle); // Bind Toggle

			if (solbit.sidepane.ContentOverlay) { // If we are using a ContentOverlay
				solbit.sidepane.ContentOverlay.addEventListener("mouseup", solbit.sidepane.Toggle); // Bind Toggle to Content Overlay
			}
		}
	}

	// Toggling the Sidepane
	export function Toggle(): void {
		let containerShowing: boolean = solbit.sidepane.SidepaneButton.hasAttribute("active"); // Get active attribute, if any

		if (!containerShowing) { // If container is NOT showing
			solbit.sidepane.SidepaneButton.setAttribute("active", ""); // Set active attribute
			solbit.sidepane.Container.setAttribute("data-solbit-animation", "slide"); // Slide the Container

			if (solbit.sidepane.ContentOverlay) { // If we are using a ContentOverlay
				solbit.sidepane.ContentOverlay.setAttribute("active", ""); // Show the content overlay
			}
		} else { // If container is showing
			solbit.sidepane.SidepaneButton.removeAttribute("active"); // Remove active attribute
			solbit.sidepane.Container.removeAttribute("data-solbit-animation"); // Remove animation attribute

			if (solbit.sidepane.ContentOverlay) { // If we are using a ContentOverlay
				solbit.sidepane.ContentOverlay.removeAttribute("active"); // Hide content overlay
			}
		}
	}
}