// Solbit Searchbox
/// <reference path="interfaces.ts" />
/// <reference path="position.ts" />
/// <reference path="render.ts" />

namespace solbit.searchbox {

	// Enable
	// This function is responsible for enabling the displaying of a results view on a Searchbox input Element
	export function Enable(searchbox: any, resultsview: any, resultsFunc: (query: string, searchData: SearchData) => void): boolean {
		let success: boolean = false;

		if ((typeof searchbox.tagName == "string") && (searchbox.tagName.toLowerCase() == "input")) { // If searchbox is an input Element
			if (typeof resultsview.tagName == "string") { // If resultsview is an Element
				let searchData: SearchData = {
					"Searchbox": searchbox,
					"ResultsView": resultsview,
					"ResultsFunc": resultsFunc
				};

				searchbox.addEventListener("focusout", solbit.render.ToggleDisplay.bind(this, resultsview, false)); // Hide the Results View when focus ends on the Searchbox
				searchbox.addEventListener("keyup", solbit.searchbox.Search.bind(this, searchData));
			}
		}

		return success;
	}

	// Search
	// This function is responsible for performing a Search operation and handling the results.
	export function Search(searchData: SearchData): void {
		let code: string = arguments[1].code;
		let invalidKey: boolean = false;
		let invalidKeys = ["Alt", "Caps", "Control", "Tab"];

		for (let invalidKeyString of invalidKeys) {
			switch (code.indexOf(invalidKeyString) !== -1) {
				case true:
					invalidKey = true;
					break;
			}
		}

		if (!invalidKey) { // If this isn't an invalid key
			let doingSearch = false;

			if (code !== "Escape") { // If we're not ending the search operation via Escape
				let value: string = searchData.Searchbox.value; // Set value to the current value of the Searchbox
				doingSearch = (value.length > 1);

				if (doingSearch) { // If the searchbox value has meaningful input content (Bleve doesn't like 1 char search, which is understandable)
					solbit.render.HideAll(); // Hide all existing Elements to avoid clashing between multiple Custom Elements.
					searchData.ResultsFunc(value, searchData); // Get results, pass along searchData so the function can call Propagate
				}
			}

			if (!doingSearch) { // If we're not doing a search
				solbit.render.HideAll(); // Hide all existing Elements to avoid clashing between multiple Custom Elements.
			}
		}
	}

	// Propagate
	// This function is responsible for propagating any items provided by the async func from Search to the Results View of searchData
	export function Propagate(results: SearchResult[], searchData: SearchData) {
		let resultsViewList: Element = searchData.ResultsView.querySelector('div[data-solbit="list"]'); // Get the inner List of the resultsView
		let currentListItems: NodeList = resultsViewList.querySelectorAll('div[data-solbit="list-item"]'); // Get all List Items

		if (currentListItems.length > 0) { // If there are List Items
			for (let i = 0; i < currentListItems.length; i++) { // For each List item
				resultsViewList.removeChild(currentListItems[i]); // Remove this Element
			}
		}

		if (results.length !== 0) { // If there are results
			for (let result of results) {
				let resultElement: HTMLDivElement = document.createElement("div");
				resultElement.setAttribute("data-solbit", "list-item"); // Declare as a List Item
				resultElement.setAttribute("data-solbit-nolistbg", ""); // Don't have any background styling

				let resultElementLink: HTMLAnchorElement = document.createElement("a");
				resultElementLink.title = result.Title;
				resultElementLink.textContent = result.Title;
				resultElementLink.href = result.Title;

				let resultElementContent: HTMLElement = document.createElement("section"); // Create a section Element
				resultElementContent.innerHTML = result.Description.replace("\n", "<br />"); // Set the innerHTML to the description provided, accounting for newline strings

				resultElement.appendChild(resultElementLink); // Add the link
				resultElement.appendChild(resultElementContent); // Add the textContent

				resultsViewList.appendChild(resultElement); // Append the resultElement to the Result View List
			}

			solbit.render.HideAll(); // Hide all existing Elements to avoid clashing between multiple Custom Elements.
			solbit.position.Bottom(searchData.Searchbox, searchData.ResultsView);
			solbit.position.Center(searchData.Searchbox, searchData.ResultsView);

			solbit.render.ToggleDisplay(searchData.ResultsView, true); // Show
		}
	}
}