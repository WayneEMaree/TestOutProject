import modalHtml from '../html/windowWrapper.html';
import { modularFunctions } from './modularFunctions';
import { IHtmlElem } from '../interfaces/IHtmlElem';

export class moduleWindow {
  element: HTMLElement;
  appName: string;
  modalId: string;
  resizeId: string;
  closeId: string;
  maximizeId: string;
  restoreId: string;
  minimizeId: string;
  moduleFunc;
    
  constructor(modalId: string, appName: string) {
    this.moduleFunc = new modularFunctions(modalId);
    this.appName = appName;
    this.modalId = modalId;
    this.resizeId = modalId + 'Resize';
    this.closeId = modalId + 'Close';
    this.maximizeId = modalId + 'Maximize';
    this.restoreId = modalId + 'Restore';
    this.minimizeId = modalId + 'Minimize';
    
    const resizeElem = document.createElement('div');
    let changedModalHtml = modalHtml;
    resizeElem.classList.add('maneuverElem');
    resizeElem.id = this.resizeId;
    resizeElem.innerHTML = this.appName;
    
    changedModalHtml = changedModalHtml.replace(/\$\{1\}/g, this.closeId);
    changedModalHtml = changedModalHtml.replace(/\$\{2\}/g, this.maximizeId);
    changedModalHtml = changedModalHtml.replace(/\$\{3\}/g, this.restoreId);
    changedModalHtml = changedModalHtml.replace(/\$\{4\}/g, this.minimizeId);
    /*
    if (IElem !== undefined) {
      this.element = IElem.element;
      this.element.appendChild(resizeElem);
      changedModalHtml = 
        changedModalHtml.replace(/\$\{content\}/g, IElem.element.innerHTML);
      this.element.innerHTML = this.element.innerHTML + changedModalHtml;
      this.element.id = IElem.element.id;
    } else { */
      this.element = document.createElement('div');
      this.element.classList.add('container');
      this.element.appendChild(resizeElem);
      //changedModalHtml = changedModalHtml.replace(/\$\{content\}/g, '');
      this.element.innerHTML = this.element.innerHTML + changedModalHtml;
      this.element.id = modalId;
    /*}*/
  }
  
  placeAppHtml(appContent: IHtmlElem) {
    this.element.innerHTML = 
      this.element.innerHTML.replace(/\$\{content\}/g, appContent.element);
    document.body.appendChild(this.element);
    this.addManueverEventListeners();
    this.addButtonEventListeners();
  }
    
  getMetaData() {
    return this.element.id;
  }
  
  useGenericWindowFunctionMove(event: MouseEvent): any {
    this.moduleFunc.repositionElement(event);
  }
  
  useGenericWindowFunctionStart(event: MouseEvent) {
    this.moduleFunc.startMovement(this.element.id, event);
  }
  
  useGenericWindowFunctionStop(event: MouseEvent) {
    this.moduleFunc.stopMovement();
  }
  
  addButtonEventListeners() {
    document.getElementById(this.closeId).addEventListener('click', (e:MouseEvent) => {
      this.moduleFunc.close();
    });
    document.getElementById(this.restoreId).addEventListener('click', (e:MouseEvent) => {
      this.moduleFunc.restore(this.maximizeId, this.restoreId);
    })
    document.getElementById(this.maximizeId)
      .addEventListener('click', (e:MouseEvent) => {
        this.moduleFunc.maximize(this.maximizeId, this.restoreId);
    });
    document.getElementById(this.minimizeId)
      .addEventListener('click', (e:MouseEvent) => {
        this.moduleFunc.minimize(this.minimizeId);
    });
  }
  
  addManueverEventListeners() {
    document.getElementById(this.resizeId)
      .addEventListener('mousedown', (e:MouseEvent) => {
        console.log(this.modalId);
        this.useGenericWindowFunctionStart(e);
    });
    document.getElementById(this.resizeId)
      .addEventListener('mouseup', (e:MouseEvent) => {
        this.useGenericWindowFunctionStop(e);
    });
    document.getElementById(this.resizeId)
      .addEventListener('mousemove', (e:MouseEvent) => {
        this.useGenericWindowFunctionMove(e);
    });
    document.getElementById(this.resizeId)
      .addEventListener('mouseleave', (e:MouseEvent) => {
        this.useGenericWindowFunctionStop(e);
    });
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
