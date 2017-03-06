// Solbit Searchbox
/// <reference path="interfaces.ts" />
/// <reference path="position.ts" />
/// <reference path="render.ts" />

namespace solbit.searchbox {
	export var CurrentInputLength: number = 0;

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

				searchbox.addEventListener("focusin", solbit.searchbox.ShowResults.bind(this, searchData)); // Enable the re-showing of results in the event of a focusout, by listening to focusin
				searchbox.addEventListener("blur", solbit.searchbox.CloseResultsView.bind(this, resultsview)); // Hide the Results View when focus ends on the Searchbox
				searchbox.addEventListener("input", solbit.searchbox.Search.bind(this, searchData));

				solbit.position.Register(["bottom", "center"], searchbox, resultsview); // Register to positioning system so we get dynamic repositioning
			}
		}

		return success;
	}

	// CloseResultsView
	// This function is responsible for closing of the ResultsView during the appropriate focusout events.
	export function CloseResultsView(resultsview: any) {
		let focusRelatedTarget: Element = arguments[1].relatedTarget;
		let isInsideSearchResults: boolean = resultsview.contains(focusRelatedTarget) || (resultsview == focusRelatedTarget); // If we're clicking something inside the Results View

		if (!isInsideSearchResults) { // If we're not clicking inside the Results View
			solbit.render.ToggleDisplay(resultsview, false);
		}
	}

	// ShowResults
	// This function is responsible for re-showing of existing results in the event of a focusin after a focusout has occured
	export function ShowResults(searchData: SearchData): void {
		let resultsViewList: Element = searchData.ResultsView.querySelector('div[data-solbit="list"]'); // Get the inner List of the resultsView

		if ((searchData.Searchbox.value !== "") && (resultsViewList.children.length > 1)) { // If the Searchbox isn't empty and there isn't only the "No Results" section is in the List
			solbit.position.Bottom(searchData.Searchbox, searchData.ResultsView);
			solbit.position.Center(searchData.Searchbox, searchData.ResultsView);
			solbit.render.ToggleDisplay(searchData.ResultsView, true); // Show
		}
	}

	// Search
	// This function is responsible for performing a Search operation and handling the results.
	export function Search(searchData: SearchData): void {
		let value: string = searchData.Searchbox.value; // Set value to the current value of the Searchbox
		let doSearch: boolean = (value.length > 1); // Set doSearch to if the input value is greater than 1

		if (doSearch) { // If we should do search already (input greater than 1), do further checks
			doSearch = (value.length > solbit.searchbox.CurrentInputLength); // Set doSearch to boolean, of if new input length is greather than previous
		}

		solbit.searchbox.CurrentInputLength = value.length;

		if (doSearch) { // If we should perform a search
			searchData.ResultsFunc(value, searchData); // Get results, pass along searchData so the function can call Propagate
		} else { // If we're not doing a search
			solbit.render.ToggleDisplay(searchData.ResultsView, false); // Hide
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
				resultElementLink.href = result.URL;

				resultElement.appendChild(resultElementLink); // Add the link

				if (typeof result.Description == "string" && (result.Description !== "")) { // If the Description isn't empty
					let resultElementContent: HTMLElement = document.createElement("section"); // Create a section Element
					resultElementContent.innerHTML = result.Description.replace("\n", "<br />"); // Set the innerHTML to the description provided, accounting for newline strings
					resultElement.appendChild(resultElementContent); // Add the textContent
				}

				resultsViewList.appendChild(resultElement); // Append the resultElement to the Result View List
			}

			solbit.render.HideAll(); // Hide all existing Elements to avoid clashing between multiple Custom Elements.
			solbit.position.Bottom(searchData.Searchbox, searchData.ResultsView);
			solbit.position.Center(searchData.Searchbox, searchData.ResultsView);

			solbit.render.ToggleDisplay(searchData.ResultsView, true); // Show
		}
	}
}