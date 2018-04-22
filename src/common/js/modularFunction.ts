let modularFunctions = (function () {
    let layerStore = [];
    let target = '';
    let isMouseDown = false;
    
    function init() {
        
    }
    
    function minimize(element: string) {
    
    }
    
    function maximize(element: string) {
    
    }
    
    function close(element: string) {
    
    }
    
    /**
        element data and elements will use a shared class, element, metadata respectively
     probably only going to need the elementData section to do everything. Make a lookup table?
     */
    function repositionElement(elementId: string, event: MouseEvent) {
        console.log('reposition hit');
        const elementToMove = document.getElementById(elementId);
        let currentElemHeight = elementToMove.offsetHeight;
        let currentElemWidth = elementToMove.offsetWidth;
        
        while( isMouseDown ) {
            //let yLocation = MouseEvent.y - (currentElemHeight/2);
            let yLocation = 40;
            let xLocation = 40;
            //let xLocation = MouseEvent.x - (currentElemWidth/2);
            
            elementToMove.style.top = String(yLocation);
            elementToMove.style.left = String(xLocation);
        }
    }
    
    function startMovement(elementId: string, event: MouseEvent) {
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
    }

})();

modularFunctions.init();