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
        function Register(positions, primaryElement, secondaryElement) {
            var registeredObject = { HorizontalPos: positions[0], VerticalPos: positions[0], Primary: primaryElement, Secondary: secondaryElement };
            solbit.position.registered.push(registeredObject);
        }
        position.Register = Register;
        function Update() {
            for (var _i = 0, _a = solbit.position.registered; _i < _a.length; _i++) {
                var registeredObject = _a[_i];
                if (registeredObject.HorizontalPos == "top") {
                    solbit.position.Top(registeredObject.Primary, registeredObject.Secondary);
                }
                else {
                    solbit.position.Bottom(registeredObject.Primary, registeredObject.Secondary);
                }
                if (registeredObject.VerticalPos == "center") {
                    solbit.position.Center(registeredObject.Primary, registeredObject.Secondary);
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
                            headerItemElement.addEventListener("mouseup", solbit.header.Toggle.bind(this, headerItemElement, customElement));
                        }
                        else {
                            headerItemElement.addEventListener("mouseenter", solbit.header.Toggle.bind(this, headerItemElement, customElement, true));
                            customElement.addEventListener("mouseleave", solbit.header.Toggle.bind(this, headerItemElement, customElement, false));
                        }
                        solbit.position.Register(["center", "bottom"], headerItemElement, customElement);
                        success = true;
                    }
                }
            }
            return success;
        }
        header.Enable = Enable;
        function Toggle(headerItemElement, customElement, forceAction) {
            solbit.render.HideAll();
            solbit.position.Bottom(headerItemElement, customElement);
            solbit.position.Center(headerItemElement, customElement);
            solbit.render.ToggleDisplay(customElement, forceAction);
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
        var headerElement = document.body.querySelector("header");
        if (headerElement !== null) {
            headerElement.addEventListener("mouseleave", solbit.render.HideAll);
        }
        window.addEventListener("resize", solbit.position.Update);
    }
    solbit.Init = Init;
})(solbit || (solbit = {}));
