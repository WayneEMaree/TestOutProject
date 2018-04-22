import modalHtml from '../html/windowWrapper.html';

interface IHtmlElem {
    element: HTMLElement,
}

class moduleWindow {
    element: HTMLElement;
    
    constructor(modalId: string, IElem?: IHtmlElem) {
        this.element = IElem.element || document.createElement('div');
        this.element.innerHTML = IElem.element.innerHTML || modalHtml;
        this.element.id = IElem.element.id || modalId;
        this.element.addEventListener(
            "mousedown", (e:MouseEvent) => this.useGenericWindowFunctionMove(e));
        this.element.addEventListener(
            "mouseup", (e:MouseEvent) => this.useGenericWindowFunctionStop(e));
    }
    
    getMetaData() {
        return this.element.id;
    }
    
    useGenericWindowFunctionMove(event: MouseEvent) {
        modularFunctions.startMovement(this.element.id, event);
    }
    
    useGenericWindowFunctionStop(event: MouseEvent) {
        modularFunctions.stopMovement();
    }
};

Object.defineProperty(moduleWindow, 'modalId', {
    get() {
        return this.element.id;
    },
    set(modalId: string) {
        this.element.id = modalId;  
    },
});

export default moduleWindow;