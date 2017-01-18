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
                var headerItemLocation = headerItemElement.getClientRects()[0];
                var headerItemX = headerItemLocation.left;
                var headerItemY = headerItemLocation.bottom;
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
