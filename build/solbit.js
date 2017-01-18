var solbit;
(function (solbit) {
    var header;
    (function (header) {
        function Enable(headerItemElement, customElement) {
            if ((typeof headerItemElement.tagName == "string") && (headerItemElement.tagName.toLowerCase() == "span")) {
                if (typeof customElement.tagName == "string") {
                    headerItemElement.addEventListener("mouseup", solbit.header.Toggle.bind(this, headerItemElement, customElement));
                }
            }
        }
        header.Enable = Enable;
        function Toggle(headerItemElement, customElement) {
            if (!customElement.hasAttribute("data-solbit-show")) {
                solbit.position.Bottom(headerItemElement, customElement);
                solbit.position.Center(headerItemElement, customElement);
                customElement.setAttribute("data-solbit-show", "");
            }
            else {
                customElement.removeAttribute("data-solbit-show");
            }
        }
        header.Toggle = Toggle;
    })(header = solbit.header || (solbit.header = {}));
})(solbit || (solbit = {}));
var solbit;
(function (solbit) {
    var position;
    (function (position) {
        function Top(primaryElement, secondaryElement) {
            var primaryElementDimensions = primaryElement.getClientRects()[0];
            var secondaryElementDimensions = secondaryElement.getClientRects()[0];
            secondaryElement.style.top = (primaryElementDimensions.top - secondaryElementDimensions.height).toString() + "px";
        }
        position.Top = Top;
        function Bottom(primaryElement, secondaryElement) {
            var primaryElementDimensions = primaryElement.getClientRects()[0];
            secondaryElement.style.bottom = primaryElementDimensions.bottom.toString() + "px";
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
    })(position = solbit.position || (solbit.position = {}));
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
    }
    solbit.Init = Init;
})(solbit || (solbit = {}));
