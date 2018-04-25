export class modularFunctions {
  layerStore: Array<any> = [];
  target:string = '';
  grabbedY:number = -1;
  grabbedX:number = -1;
  isMouseDown:boolean = false;
    
  public constructor(elementId: string) {
    this.target = elementId;
  }
    
  public minimize() {
    // needs data to revert to
    const elementToMove = document.getElementById(this.target);
    elementToMove.classList.add('minimizedApp');
  }
  
  public reverseMinimize() {
    const elementToMove = document.getElementById(this.target);
    elementToMove.classList.remove('minimizedApp');
  }
    
  public maximize(maxElem: string, restoreElem: string) {
    const elementToMove = document.getElementById(this.target);
    const maxButton = document.getElementById(maxElem).style['display'] = 'none';
    const restoreButton = 
      document.getElementById(restoreElem).style['display'] = 'inline-block';
    elementToMove.style['width'] = '100%';
    elementToMove.style['height'] = '100%';
    elementToMove.style['top'] = '0px';
    elementToMove.style['left'] = '0px';
  }
  
  public restore(maxElem: string, restoreElem: string) {
    const elementToMove = document.getElementById(this.target);
    const maxButton = 
      document.getElementById(maxElem).style['display'] = 'inline-block';
    const restoreButton = 
      document.getElementById(restoreElem).style['display'] = 'none';
    elementToMove.style['width'] = '500px';
    elementToMove.style['height'] = '300px';
    elementToMove.style['top'] = 'calc(50% - 150px)';
    elementToMove.style['left'] = 'calc(50% - 250px)';
  }
    
  public close() {
    document.getElementById(this.target).remove();
  }
    
  /**
    element data and elements will use a shared class, element, metadata respectively
    probably only going to need the elementData section to do everything. Make a lookup table?
  */
  public repositionElement(event: MouseEvent) {
    if(this.target !== '') {
      const elementToMove = document.getElementById(this.target);
        
      if (this.isMouseDown) {
        let yLocation = event.clientY - this.grabbedY;
        let xLocation = event.clientX - this.grabbedX;

        elementToMove.style["top"] = yLocation + 'px';
        elementToMove.style["left"] = xLocation + 'px';
      }
    }
  }
    
  public startMovement(elementId: string, event: MouseEvent) {
    this.isMouseDown = true;
    const elementStyle = document.getElementById(this.target).getBoundingClientRect();
    this.grabbedY = event.clientY - elementStyle.top;
    this.grabbedX = event.clientX - elementStyle.left;
  }
    
  public stopMovement() {
    this.isMouseDown = false;
  }
};
