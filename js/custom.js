(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/

// Add Clickable Logo
app.controller('prmLogoAfterController', [function () {
var vm = this;
vm.getIconLink = getIconLink;
function getIconLink() {
              return vm.parentCtrl.iconLink;
             }
}]);
 
app.component('prmLogoAfter',{
bindings: {parentCtrl: '<'},
controller: 'prmLogoAfterController',
template: '<div class="product-logo product-logo-local" layout="row" layout-align="start center" layout-fill id="banner" tabindex="0"  role="banner">' +
'<a href="https://www.umb.edu/library"><img class="logo-image" alt="{{::(&apos;nui.header.LogoAlt&apos; | translate)}}" ng-src="{{$ctrl.getIconLink()}}"/></a></div>'
});

app.controller("reportABugController", [function () {
    //set the context
    var vm = this;
    //binds the function to the scope so it's requestable in the component.
    vm.getRecordID = getRecordID;
    vm.getIdentifier = getIdentifier;
    vm.getTitle = getTitle;
    vm.getTitleURL = getTitleURL;
    vm.getBrowser = getBrowser;
    vm.getPlatform = getPlatform;
    vm.linkBaseURL = "https://umbrella.lib.umb.edu";
    vm.linkReportText = "Report A Problem";
    vm.linkReportURL = "https://docs.google.com/forms/d/e/1FAIpQLSdZsd1JeeXVzGuTISckueJmSgxZBKIYvqswTV2O7UiIdi8eHw/viewform?usp=pp_url";

    // Get Browser Version & Make
    function getBrowser() {
        // Browser Detection Code
        var unknown = "-";
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = "" + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf("Opera")) != -1) {
            browser = "Opera";
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf("Version")) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
            browser = "Microsoft Internet Explorer";
            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
            browser = "Chrome";
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
            browser = "Safari";
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf("Version")) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
            browser = "Firefox";
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf("Trident/") != -1) {
            browser = "Microsoft Internet Explorer";
            version = nAgt.substring(nAgt.indexOf("rv:") + 3);
        }
        // Other browsers
        else if (
            (nameOffset = nAgt.lastIndexOf(" ") + 1) <
            (verOffset = nAgt.lastIndexOf("/"))
        ) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(";")) != -1)
            version = version.substring(0, ix);
        if ((ix = version.indexOf(" ")) != -1)
            version = version.substring(0, ix);
        if ((ix = version.indexOf(")")) != -1)
            version = version.substring(0, ix);

        majorVersion = parseInt("" + version, 10);
        if (isNaN(majorVersion)) {
            version = "" + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // mobile version
        // var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        return browser + " v" + version;
    }

    function getPlatform() {
        // system
        var os = "Unknown";
        var nAgt = navigator.userAgent;
        var clientStrings = [
            { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
            { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
            { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
            { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
            { s: "Windows Vista", r: /Windows NT 6.0/ },
            { s: "Windows Server 2003", r: /Windows NT 5.2/ },
            { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
            { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
            { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
            { s: "Windows 98", r: /(Windows 98|Win98)/ },
            { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
            {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            },
            { s: "Windows CE", r: /Windows CE/ },
            { s: "Windows 3.11", r: /Win16/ },
            { s: "Android", r: /Android/ },
            { s: "Open BSD", r: /OpenBSD/ },
            { s: "Sun OS", r: /SunOS/ },
            { s: "Linux", r: /(Linux|X11)/ },
            { s: "iOS", r: /(iPhone|iPad|iPod)/ },
            { s: "Mac OS X", r: /Mac OS X/ },
            { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
            { s: "QNX", r: /QNX/ },
            { s: "UNIX", r: /UNIX/ },
            { s: "BeOS", r: /BeOS/ },
            { s: "OS/2", r: /OS\/2/ },
            {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = "Unknown";

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = "Windows";
        }

        switch (os) {
            case "Mac OS X":
                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                break;

            case "Android":
                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case "iOS":
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion =
                    osVersion[1] + "." + osVersion[2] + "." + (osVersion[3] | 0);
                break;
        }
        return os + " " + osVersion;
    }
    //define the function that retrieves the record ID
    function getRecordID() {
        return vm.parentCtrl.item.pnx.control.recordid[0];
    }
    function getTitle() {
        // console.log("testhere");
        // console.log(JSON.stringify(vm.parentCtrl.item.pnx));
        return vm.parentCtrl.item.pnx.display.title[0];
        // return vm.parentCtrl.item.pnx.addata.atitle[0] + " (" + vm.parentCtrl.item.pnx.addata.date[0] + ")";
    }
    function getIdentifier() {
        // CLEAN URL
        return vm.parentCtrl.item.pnx.display.identifier[0]
            .replace(/<b>/g, "")
            .replace(/<\/b>/g, "")
            .replace(/\$\$C/g, "")
            .replace(/\$\$V/g, ": ");
    }
    function getTitleURL() {
        var recordContext;
        var finalURL;
        if (vm.parentCtrl.item.pnx.control.recordid[0].startsWith("TN_WorldCat")) recordContext = "WorldCat";
        else if (vm.parentCtrl.item.pnx.control.recordid[0].startsWith("TN_")) recordContext = "PC";
        else recordContext = "ALL";

        // check if URL is ezproxy
        if (((window.location.href).includes("ezprozy")) || ((window.location.href).includes("openurl"))) {
            finalURL = (window.location.href).replace(/=/g, "%3D").replace(/&/g, "%26");
        }
        else {
            finalURL = (
            this.linkBaseURL +
            "/primo-explore/fulldisplay?docid=" +
            vm.parentCtrl.item.pnx.control.recordid[0] +
            "&vid=01MA_UMB&lang=en_US&context=" +
            recordContext
            )
            .replace(/=/g, "%3D")
            .replace(/&/g, "%26");
        }

        return finalURL;
        // return (window.location.href + "&context=PC&vid=01MA_UMB&lang=en_US").replace(/=/g, "%3D").replace(/&/g, "%26");
    }
}]);

app.component("prmActionContainerAfter", {
  bindings: { parentCtrl: "<" },
  controller: "reportABugController",
  template:
    '<ul class="_md-nav-bar-list" role="listbox" tabindex="0" aria-label=""> \
                <div layout="row" layout-align="space-between center" class="scroll-hidden layout-align-space-between-center layout-row"> \
                <li style="margin-left:42%" class="md-nav-item marg-nav-item layout-column" role="option" aria-selected="false" layout="column" tabindex="-1"> \
                <a class="arrow-link" href="{{ $ctrl.linkReportURL }}&entry.1707736170={{ $ctrl.getTitle() }}&entry.516025303={{ $ctrl.getRecordID() }}&entry.433063085={{ $ctrl.getIdentifier() }}&entry.1363950030={{ $ctrl.getTitleURL() }}&entry.202619964={{ $ctrl.getBrowser() }}&entry.1445429082={{ $ctrl.getPlatform() }}" target="_blank"> \
                <button class="_md-nav-button md-accent md-button md-primoExplore-theme md-ink-ripple md-active md-primary" type="button" role="tab" aria-expanded="false" style="" aria-label="{{ $ctrl.linkReportText }}"> \
                <div layout="column" class="layout-column"> \
                <svg style="margin-left:35%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="report_1" x="0px" fit="" preserveAspectRatio="xMidYMid meet" focusable="false" y="72" width="24px" height="24px" viewBox="0 0 300 380"> \
                <path d="M34.419,298V22h138.696h0.841v33.411c0,8.301,6.753,15.055,15.053,15.055h33.154v88.5c2.443-0.484,4.957-0.75,7.528-0.75   c5.087,0,9.962,0.994,14.472,2.804V64.006c0-1.326-0.526-2.598-1.464-3.536L183.694,1.464C182.755,0.527,181.484,0,180.158,0   H27.472c-8.3,0-15.053,6.753-15.053,15.054v289.893c0,8.301,6.753,15.054,15.053,15.054h111.884   c-1.256-6.713,1.504-13.831,7.559-17.83c2.341-1.546,4.692-2.919,7.034-4.17H34.419z"/>' +
    '<path d="M308.487,310.515c-12.254-8.092-25.057-11.423-33.599-12.795c6.02-9.685,9.564-21.448,9.564-34.129   c0-9.12-1.824-17.889-5.174-25.781c8.22-1.738,18.908-5.176,29.209-11.98c3.457-2.283,4.408-6.935,2.126-10.392   c-2.283-3.456-6.936-4.407-10.392-2.125c-10.742,7.094-22.229,9.723-29.102,10.698c-3.459-4.387-7.5-8.249-12.077-11.394   c0.859-3.081,1.294-6.265,1.294-9.509c0-17.861-13.062-32.393-29.117-32.393c-16.055,0-29.115,14.531-29.115,32.393   c0,3.244,0.435,6.428,1.294,9.509c-4.577,3.145-8.618,7.007-12.077,11.394c-6.873-0.975-18.358-3.603-29.102-10.698   c-3.456-2.282-8.108-1.331-10.392,2.125c-2.282,3.456-1.331,8.109,2.126,10.392c10.301,6.803,20.988,10.241,29.208,11.979   c-3.351,7.893-5.175,16.661-5.175,25.781c0,12.681,3.544,24.444,9.563,34.129c-8.541,1.372-21.343,4.703-33.597,12.794   c-3.456,2.283-4.408,6.935-2.126,10.392c1.442,2.184,3.83,3.368,6.266,3.368c1.419,0,2.854-0.402,4.126-1.242   c16.62-10.975,35.036-11.269,35.362-11.272c0.639-0.002,1.255-0.093,1.847-0.245c8.877,7.447,19.884,11.861,31.791,11.861   c11.907,0,22.914-4.415,31.791-11.861c0.598,0.153,1.22,0.244,1.865,0.245c0.183,0,18.499,0.148,35.346,11.272   c1.272,0.84,2.707,1.242,4.126,1.242c2.434,0,4.823-1.184,6.266-3.368C312.895,317.45,311.943,312.797,308.487,310.515z    M238.719,296.005c0,4.142-3.357,7.5-7.5,7.5c-4.142,0-7.5-3.358-7.5-7.5v-64.83c0-4.142,3.358-7.5,7.5-7.5   c4.143,0,7.5,3.358,7.5,7.5V296.005z">' +
    '<path d="M143.627,49.624h-78c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8h78c4.418,0,8-3.582,8-8   C151.627,53.206,148.045,49.624,143.627,49.624z"/>' +
    '<path d="M143.627,99.624h-78c-4.418,0-8,3.582-8,8c0,4.419,3.582,8,8,8h78c4.418,0,8-3.581,8-8   C151.627,103.206,148.045,99.624,143.627,99.624z"/>' +
    '<path d="M143.627,149.624h-78c-4.418,0-8,3.582-8,8c0,4.419,3.582,8,8,8h78c4.418,0,8-3.581,8-8   C151.627,153.206,148.045,149.624,143.627,149.624z"/>' +
    '</svg> \
                <span style="letter-spacing: 0.03em;font-weight: 600;font-size: 10px;color: rgba(58,58,58,.8);line-height: 18px;" class="_md-nav-button-text button-text">{{ $ctrl.linkReportText }}</span> \
                </div></button></a></li></div></ul>'
});
})();


   
