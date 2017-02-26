var solbit;
(function (solbit) {
    var position;
    (function (position) {
        position.registered = [];
        function Top(primaryElement, secondaryElement) {
            var primaryElementDimensions = primaryElement.getClientRects()[0];
            var secondaryElementDimensions = secondaryElement.getClientRects()[0];
            secondaryElement.style.top = (primaryElementDimensions.top - secondaryElementDimensions.height).toString() + "px";
        }
        position.Top = Top;
        function Bottom(primaryElement, secondaryElement) {
            var primaryElementDimensions = primaryElement.getClientRects()[0];
            var y = primaryElementDimensions.bottom;
            var documentScrollAmount = document.body.getClientRects()[0].top;
            if (documentScrollAmount < 0) {
                y += Math.abs(documentScrollAmount);
            }
            secondaryElement.style.top = y.toString() + "px";
        }
        position.Bottom = Bottom;
        function Center(primaryElement, secondaryElement) {
            var primaryElementDimensions = primaryElement.getClientRects()[0];
            var secondaryElementDimensions = secondaryElement.getClientRects()[0];
            var primaryElementWidth = primaryElementDimensions.width;
            var secondaryElementWidth = secondaryElementDimensions.width;
            var secondaryElementX;
            if (primaryElementWidth > secondaryElementWidth) {
                secondaryElementX = primaryElementDimensions.left + ((primaryElementWidth - secondaryElementWidth) / 2);
            }
            else {
                secondaryElementX = primaryElementDimensions.left - ((secondaryElementWidth - primaryElementWidth) / 2);
            }
            secondaryElement.style.left = secondaryElementX.toString() + "px";
        }
        position.Center = Center;
        function Register(positions, primaryElement, secondaryElement) {
            var registeredObject = { VerticalPos: positions[0], HorizontalPos: positions[1], Primary: primaryElement, Secondary: secondaryElement };
            solbit.position.registered.push(registeredObject);
        }
        position.Register = Register;
        function Update() {
            for (var _i = 0, _a = solbit.position.registered; _i < _a.length; _i++) {
                var registeredObject = _a[_i];
                if (registeredObject.Primary.getClientRects().length !== 0) {
                    if (registeredObject.VerticalPos == "top") {
                        solbit.position.Top(registeredObject.Primary, registeredObject.Secondary);
                    }
                    else {
                        solbit.position.Bottom(registeredObject.Primary, registeredObject.Secondary);
                    }
                    if (registeredObject.HorizontalPos == "center") {
                        solbit.position.Center(registeredObject.Primary, registeredObject.Secondary);
                    }
                }
            }
        }
        position.Update = Update;
    })(position = solbit.position || (solbit.position = {}));
})(solbit || (solbit = {}));
var solbit;
(function (solbit) {
    var render;
    (function (render) {
        function HideAll() {
            for (var _i = 0, _a = solbit.position.registered; _i < _a.length; _i++) {
                var registeredObject = _a[_i];
                registeredObject.Secondary.removeAttribute("data-solbit-show");
            }
        }
        render.HideAll = HideAll;
        function ToggleDisplay(element, forceAction) {
            if (forceAction == undefined) {
                forceAction = !element.hasAttribute("data-solbit-show");
            }
            if (forceAction) {
                element.setAttribute("data-solbit-show", "");
            }
            else {
                element.removeAttribute("data-solbit-show");
            }
        }
        render.ToggleDisplay = ToggleDisplay;
    })(render = solbit.render || (solbit.render = {}));
})(solbit || (solbit = {}));
var solbit;
(function (solbit) {
    var header;
    (function (header) {
        function Enable(type, headerItemElement, customElement) {
            var success = false;
            if ((type == "click") || (type == "hover")) {
                if ((typeof headerItemElement.tagName == "string") && (headerItemElement.tagName.toLowerCase() == "span")) {
                    if (typeof customElement.tagName == "string") {
                        if (type == "click") {
                            headerItemElement.addEventListener("mouseup", solbit.header.Toggle.bind(this, customElement));
                        }
                        else {
                            headerItemElement.addEventListener("mouseenter", solbit.header.Toggle.bind(this, customElement, true));
                            customElement.addEventListener("mouseleave", solbit.header.Toggle.bind(this, customElement, false));
                        }
                        solbit.position.Register(["bottom", "center"], headerItemElement, customElement);
                        success = true;
                    }
                }
            }
            return success;
        }
        header.Enable = Enable;
        function Toggle(customElement, forceAction) {
            solbit.render.HideAll();
            solbit.position.Update();
            solbit.render.ToggleDisplay(customElement, forceAction);
        }
        header.Toggle = Toggle;
    })(header = solbit.header || (solbit.header = {}));
})(solbit || (solbit = {}));
var solbit;
(function (solbit) {
    var searchbox;
    (function (searchbox_1) {
        function Enable(searchbox, resultsview, resultsFunc) {
            var success = false;
            if ((typeof searchbox.tagName == "string") && (searchbox.tagName.toLowerCase() == "input")) {
                if (typeof resultsview.tagName == "string") {
                    var searchData = {
                        "Searchbox": searchbox,
                        "ResultsView": resultsview,
                        "ResultsFunc": resultsFunc
                    };
                    searchbox.addEventListener("focusin", solbit.searchbox.ShowResults.bind(this, searchData));
                    searchbox.addEventListener("focusout", solbit.searchbox.DelayClose.bind(this, resultsview));
                    searchbox.addEventListener("input", solbit.searchbox.Search.bind(this, searchData));
                    solbit.position.Register(["bottom", "center"], searchbox, resultsview);
                }
            }
            return success;
        }
        searchbox_1.Enable = Enable;
        function DelayClose(resultsview) {
            var closer = solbit.render.ToggleDisplay.bind(this, resultsview, false);
            window.setTimeout(closer, 50);
        }
        searchbox_1.DelayClose = DelayClose;
        function ShowResults(searchData) {
            var resultsViewList = searchData.ResultsView.querySelector('div[data-solbit="list"]');
            if ((searchData.Searchbox.value !== "") && (resultsViewList.children.length > 1)) {
                solbit.position.Bottom(searchData.Searchbox, searchData.ResultsView);
                solbit.position.Center(searchData.Searchbox, searchData.ResultsView);
                solbit.render.ToggleDisplay(searchData.ResultsView, true);
            }
        }
        searchbox_1.ShowResults = ShowResults;
        function Search(searchData) {
            var value = searchData.Searchbox.value;
            if (value.length > 1) {
                searchData.ResultsFunc(value, searchData);
            }
            else {
                solbit.render.ToggleDisplay(searchData.ResultsView, false);
            }
        }
        searchbox_1.Search = Search;
        function Propagate(results, searchData) {
            var resultsViewList = searchData.ResultsView.querySelector('div[data-solbit="list"]');
            var currentListItems = resultsViewList.querySelectorAll('div[data-solbit="list-item"]');
            if (currentListItems.length > 0) {
                for (var i = 0; i < currentListItems.length; i++) {
                    resultsViewList.removeChild(currentListItems[i]);
                }
            }
            if (results.length !== 0) {
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var result = results_1[_i];
                    var resultElement = document.createElement("div");
                    resultElement.setAttribute("data-solbit", "list-item");
                    resultElement.setAttribute("data-solbit-nolistbg", "");
                    var resultElementLink = document.createElement("a");
                    resultElementLink.title = result.Title;
                    resultElementLink.textContent = result.Title;
                    resultElementLink.href = result.URL;
                    var resultElementContent = document.createElement("section");
                    resultElementContent.innerHTML = result.Description.replace("\n", "<br />");
                    resultElement.appendChild(resultElementLink);
                    resultElement.appendChild(resultElementContent);
                    resultsViewList.appendChild(resultElement);
                }
                solbit.render.HideAll();
                solbit.position.Bottom(searchData.Searchbox, searchData.ResultsView);
                solbit.position.Center(searchData.Searchbox, searchData.ResultsView);
                solbit.render.ToggleDisplay(searchData.ResultsView, true);
            }
        }
        searchbox_1.Propagate = Propagate;
    })(searchbox = solbit.searchbox || (solbit.searchbox = {}));
})(solbit || (solbit = {}));
var solbit;
(function (solbit) {
    var sidepane;
    (function (sidepane) {
        function Enable() {
            solbit.sidepane.SidepaneButton = document.querySelector('header > div[data-solbit="button"]');
            if (solbit.sidepane.SidepaneButton !== null) {
                solbit.sidepane.Container = document.querySelector('div[data-solbit="sidepane"]');
                solbit.sidepane.ContentOverlay = document.querySelector('div[data-solbit="content-overlay"]');
                solbit.sidepane.SidepaneButton.addEventListener("mouseup", solbit.sidepane.Toggle);
                if (solbit.sidepane.ContentOverlay) {
                    solbit.sidepane.ContentOverlay.addEventListener("mouseup", solbit.sidepane.Toggle);
                }
            }
        }
        sidepane.Enable = Enable;
        function Toggle() {
            var containerShowing = solbit.sidepane.SidepaneButton.hasAttribute("active");
            if (!containerShowing) {
                solbit.sidepane.SidepaneButton.setAttribute("active", "");
                solbit.sidepane.Container.setAttribute("data-solbit-animation", "slide");
                if (solbit.sidepane.ContentOverlay) {
                    solbit.sidepane.ContentOverlay.setAttribute("active", "");
                }
            }
            else {
                solbit.sidepane.SidepaneButton.removeAttribute("active");
                solbit.sidepane.Container.removeAttribute("data-solbit-animation");
                if (solbit.sidepane.ContentOverlay) {
                    solbit.sidepane.ContentOverlay.removeAttribute("active");
                }
            }
        }
        sidepane.Toggle = Toggle;
    })(sidepane = solbit.sidepane || (solbit.sidepane = {}));
})(solbit || (solbit = {}));
var solbit;
(function (solbit) {
    function Init() {
        solbit.sidepane.Enable();
        var headerElement = document.body.querySelector("header");
        if (headerElement !== null) {
            headerElement.addEventListener("mouseleave", solbit.render.HideAll);
        }
        window.addEventListener("resize", solbit.position.Update);
    }
    solbit.Init = Init;
})(solbit || (solbit = {}));
