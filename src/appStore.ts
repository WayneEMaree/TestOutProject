import windowHTML from '../html/windowWrapper.html';

export class appStore {
  allApps:Array<any> = [];
            
  displayApps() {
    const wayne_dos10 = document.getElementById('operatingSystem');
    let i = 0;
    while(i < this.allApps.length) {
      let existingHtml = wayne_dos10.innerHTML;
      wayne_dos10.innerHTML = existingHtml + windowHTML;
      i += 1;
    }
  }
    
  getApp(modalId: string) {
    let i = 0;
    while(i < this.allApps.length) {
      if (this.allApps[i].element.id = modalId) {
        return this.allApps[i];
      }
      i += 1;
    }
  }
  
  getAllApps() {
    return this.allApps;
  }
};