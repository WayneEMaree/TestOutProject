var modularFunctions = (function () {
    var layerStore = [];
    var target = '';
    var isMouseDown = false;
    function init() {
    }
    function minimize(element) {
    }
    function maximize(element) {
    }
    function close(element) {
    }
    /**
        element data and elements will use a shared class, element, metadata respectively
     probably only going to need the elementData section to do everything. Make a lookup table?
     */
    function repositionElement(elementId, event) {
        console.log('reposition hit');
        var elementToMove = document.getElementById(elementId);
        var currentElemHeight = elementToMove.offsetHeight;
        var currentElemWidth = elementToMove.offsetWidth;
        while (isMouseDown) {
            //let yLocation = MouseEvent.y - (currentElemHeight/2);
            var yLocation = 40;
            var xLocation = 40;
            //let xLocation = MouseEvent.x - (currentElemWidth/2);
            elementToMove.style.top = String(yLocation);
            elementToMove.style.left = String(xLocation);
        }
    }
    function startMovement(elementId, event) {
        isMouseDown = true;
        target = elementId;
        this.repositionElement(elementId, event);
    }
    function stopMovement() {
        isMouseDown = false;
        target = '';
    }
    return {
        repositionElement: repositionElement,
        startMovement: startMovement,
        stopMovement: stopMovement,
        init: init,
    };
})();
modularFunctions.init();
//# sourceMappingURL=modularFunction.js.map