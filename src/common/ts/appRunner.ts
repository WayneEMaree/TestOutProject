import windowHTML from '../html/windowWrapper.html';
import { IHtmlElem } from '../interfaces/IHtmlElem';
import { moduleWindow } from './moduleWindow';
import { FileExplorerApplet } from '../tsApps/fileExplorerApplet';

export class appRunner {
  allApps:Array<any> = [];
    
  constructor(appName: string) {
    console.log('runner hit');
    //let testModal = new moduleWindow(appName, 'This is a test');
    let newApp = new FileExplorerApplet();
    //this.allApps.push(testModal);
    this.allApps.push(newApp);
  }
};
