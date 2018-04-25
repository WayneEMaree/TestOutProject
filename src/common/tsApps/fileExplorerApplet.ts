import { moduleWindow } from '../ts/moduleWindow';
import { IHtmlElem } from '../interfaces/IHtmlElem';
import { IIcon } from '../interfaces/IIcon';
import fileExplorerAppletHtml from './fileExplorerApplet.html';

export class FileExplorerApplet extends moduleWindow {
  
  constructor() {
    super('explorerApp', 'File Explorer');
    super.placeAppHtml({element: fileExplorerAppletHtml});
  }
  
  getIcon() {
    
  }
}