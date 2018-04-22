import windowHTML from '../html/windowWrapper.html';
import moduleWindow from './moduleWindow';

let runner = (function () {
let allApps:Array<any> = [];
    
    function init() {
        console.log('runner hit');
        let testModal = new moduleWindow('intialTest');
        allApps.push(moduleWindow);
    }
            
    function displayApps() {
        const wayne_dos10 = document.getElementById('home');
        let i = 0;
        while(i < allApps.length) {
            let existingHtml = wayne_dos10.innerHTML;
            wayne_dos10.innerHTML = existingHtml + windowHTML;
            i += 1;
        }
    }
    
    function getApp(modalId: string) {
        let i = 0;
        while(i < allApps.length) {
            if (allApps[i].element.id = modalId) {
                return allApps[i];
            }
            i += 1;
        }
    }
    
    return {
        init: init,
        getApp: getApp,
    };
})();
    
runner.init();