/** source https://github.com/bestiejs/platform.js/ */
(function(){"use strict";function e(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}function t(e,t,i){var r={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&i&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&i&&(e=e.replace(RegExp(t,"i"),i)),e=n(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}function i(e,t){var i=-1,n=e?e.length:0;if("number"==typeof n&&n>-1&&n<=h)for(;++i<n;)t(e[i],i,e);else r(e,t)}function n(t){return t=s(t),/^(?:webOS|i(?:OS|P))/.test(t)?t:e(t)}function r(e,t){for(var i in e)y.call(e,i)&&t(e[i],i,e)}function o(t){return null==t?e(t):M.call(t).slice(8,-1)}function a(e,t){var i=null!=e?typeof e[t]:"number";return!(/^(?:boolean|number|string|undefined)$/.test(i)||"object"==i&&!e[t])}function l(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function b(e,t){var n=null;return i(e,function(i,r){n=t(n,i,r,e)}),n}function s(e){return String(e).replace(/^ +| +$/g,"")}function c(e){function i(t){return b(t,function(t,i){return t||RegExp("\\b"+(i.pattern||l(i))+"\\b","i").exec(e)&&(i.label||i)})}function p(t){return b(t,function(t,i,n){return t||(i[q]||i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(q)]||RegExp("\\b"+l(n)+"(?:\\b|\\w*\\d)","i").exec(e))&&n})}function f(t){return b(t,function(t,i){return t||RegExp("\\b"+(i.pattern||l(i))+"\\b","i").exec(e)&&(i.label||i)})}function S(i){return b(i,function(i,n){var r=n.pattern||l(n);return!i&&(i=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(e))&&(i=t(i,r,n.label||n)),i})}function x(t){return b(t,function(t,i){var r=i.pattern||l(i);return!t&&(t=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(e)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(e))&&((t=String(i.label&&!RegExp(r,"i").test(i.label)?i.label:t).split("/"))[1]&&!/[\d.]+/.test(t[0])&&(t[0]+=" "+t[1]),i=i.label||i,t=n(t[0].replace(RegExp(r,"i"),i).replace(RegExp("; *(?:"+i+"[_-])?","i")," ").replace(RegExp("("+i+")[-_.]?(\\w)","i"),"$1 $2"))),t})}function h(t){return b(t,function(t,i){return t||(RegExp(i+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(e)||0)[1]||null})}function O(){return this.description||""}var y=u,P=e&&"object"==typeof e&&"String"!=o(e);P&&(y=e,e=null);var v=y.navigator||{},w=v.userAgent||"";e||(e=w);var E,k,W=P||g==d,B=P?!!v.likeChrome:/\bChrome\b/.test(e)&&!/internal|\n/i.test(M.toString()),C="Object",A=P?C:"ScriptBridgingProxyObject",R=P?C:"Environment",I=P&&y.java?"JavaPackage":o(y.java),F=P?C:"RuntimeObject",T=/\bJava/.test(I)&&y.java,$=T&&o(y.environment)==R,G=T?"a":"α",X=T?"b":"β",j=y.document||{},K=y.operamini||y.opera,N=m.test(N=P&&K?K["[[Class]]"]:o(K))?N:K=null,V=e,L=[],_=null,z=e==w,H=z&&K&&"function"==typeof K.version&&K.version(),D=i([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),U=f(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt","SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),q=x([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation 3","PlayStation 4","PlayStation Vita","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),J=p({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{"PlayStation 4":1,"PlayStation 3":1,"PlayStation Vita":1}}),Z=S(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);if(D&&(D=[D]),J&&!q&&(q=x([J])),(E=/\bGoogle TV\b/.exec(q))&&(q=E[0]),/\bSimulator\b/i.test(e)&&(q=(q?q+" ":"")+"Simulator"),"Opera Mini"==U&&/\bOPiOS\b/.test(e)&&L.push("running in Turbo/Uncompressed mode"),"IE"==U&&/\blike iPhone OS\b/.test(e)?(E=c(e.replace(/like iPhone OS/,"")),J=E.manufacturer,q=E.product):/^iP/.test(q)?(U||(U="Safari"),Z="iOS"+((E=/ OS ([\d_]+)/i.exec(e))?" "+E[1].replace(/_/g,"."):"")):"Konqueror"!=U||/buntu/i.test(Z)?J&&"Google"!=J&&(/Chrome/.test(U)&&!/\bMobile Safari\b/i.test(e)||/\bVita\b/.test(q))||/\bAndroid\b/.test(Z)&&/^Chrome/.test(U)&&/\bVersion\//i.test(e)?(U="Android Browser",Z=/\bAndroid\b/.test(Z)?Z:"Android"):"Silk"==U?(/\bMobi/i.test(e)||(Z="Android",L.unshift("desktop mode")),/Accelerated *= *true/i.test(e)&&L.unshift("accelerated")):"PaleMoon"==U&&(E=/\bFirefox\/([\d.]+)\b/.exec(e))?L.push("identifying as Firefox "+E[1]):"Firefox"==U&&(E=/\b(Mobile|Tablet|TV)\b/i.exec(e))?(Z||(Z="Firefox OS"),q||(q=E[1])):U&&!(E=!/\bMinefield\b/i.test(e)&&/\b(?:Firefox|Safari)\b/.exec(U))||(U&&!q&&/[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(E+"/")+8))&&(U=null),(E=q||J||Z)&&(q||J||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Z))&&(U=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Z)?Z:E)+" Browser")):Z="Kubuntu",H||(H=h(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))","Version",l(U),"(?:Firefox|Minefield|NetFront)"])),(E="iCab"==D&&parseFloat(H)>3&&"WebKit"||/\bOpera\b/.test(U)&&(/\bOPR\b/.test(e)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(e)&&!/^(?:Trident|EdgeHTML)$/.test(D)&&"WebKit"||!D&&/\bMSIE\b/i.test(e)&&("Mac OS"==Z?"Tasman":"Trident")||"WebKit"==D&&/\bPlayStation\b(?! Vita\b)/i.test(U)&&"NetFront")&&(D=[E]),"IE"==U&&(E=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e)||0)[1])?(U+=" Mobile",Z="Windows Phone "+(/\+$/.test(E)?E:E+".x"),L.unshift("desktop mode")):/\bWPDesktop\b/i.test(e)?(U="IE Mobile",Z="Windows Phone 8.x",L.unshift("desktop mode"),H||(H=(/\brv:([\d.]+)/.exec(e)||0)[1])):"IE"!=U&&"Trident"==D&&(E=/\brv:([\d.]+)/.exec(e))&&(U&&L.push("identifying as "+U+(H?" "+H:"")),U="IE",H=E[1]),z){if(a(y,"global"))if(T&&(E=T.lang.System,V=E.getProperty("os.arch"),Z=Z||E.getProperty("os.name")+" "+E.getProperty("os.version")),W&&a(y,"system")&&(E=[y.system])[0]){Z||(Z=E[0].os||null);try{E[1]=y.require("ringo/engine").version,H=E[1].join("."),U="RingoJS"}catch(e){E[0].global.system==y.system&&(U="Narwhal")}}else"object"==typeof y.process&&!y.process.browser&&(E=y.process)?(U="Node.js",V=E.arch,Z=E.platform,H=/[\d.]+/.exec(E.version)[0]):$&&(U="Rhino");else o(E=y.runtime)==A?(U="Adobe AIR",Z=E.flash.system.Capabilities.os):o(E=y.phantom)==F?(U="PhantomJS",H=(E=E.version||null)&&E.major+"."+E.minor+"."+E.patch):"number"==typeof j.documentMode&&(E=/\bTrident\/(\d+)/i.exec(e))&&(H=[H,j.documentMode],(E=+E[1]+4)!=H[1]&&(L.push("IE "+H[1]+" mode"),D&&(D[1]=""),H[1]=E),H="IE"==U?String(H[1].toFixed(1)):H[0]);Z=Z&&n(Z)}H&&(E=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(H)||/(?:alpha|beta)(?: ?\d)?/i.exec(e+";"+(z&&v.appMinorVersion))||/\bMinefield\b/i.test(e)&&"a")&&(_=/b/i.test(E)?"beta":"alpha",H=H.replace(RegExp(E+"\\+?$"),"")+("beta"==_?X:G)+(/\d+\+?/.exec(E)||"")),"Fennec"==U||"Firefox"==U&&/\b(?:Android|Firefox OS)\b/.test(Z)?U="Firefox Mobile":"Maxthon"==U&&H?H=H.replace(/\.[\d.]+/,".x"):/\bXbox\b/i.test(q)?(Z=null,"Xbox 360"==q&&/\bIEMobile\b/.test(e)&&L.unshift("mobile mode")):!/^(?:Chrome|IE|Opera)$/.test(U)&&(!U||q||/Browser|Mobi/.test(U))||"Windows CE"!=Z&&!/Mobi/i.test(e)?"IE"==U&&z&&null===y.external?L.unshift("platform preview"):(/\bBlackBerry\b/.test(q)||/\bBB10\b/.test(e))&&(E=(RegExp(q.replace(/ +/g," *")+"/([.\\d]+)","i").exec(e)||0)[1]||H)?(E=[E,/BB10/.test(e)],Z=(E[1]?(q=null,J="BlackBerry"):"Device Software")+" "+E[0],H=null):this!=r&&"Wii"!=q&&(z&&K||/Opera/.test(U)&&/\b(?:MSIE|Firefox)\b/i.test(e)||"Firefox"==U&&/\bOS X (?:\d+\.){2,}/.test(Z)||"IE"==U&&(Z&&!/^Win/.test(Z)&&H>5.5||/\bWindows XP\b/.test(Z)&&H>8||8==H&&!/\bTrident\b/.test(e)))&&!m.test(E=c.call(r,e.replace(m,"")+";"))&&E.name&&(E="ing as "+E.name+((E=E.version)?" "+E:""),m.test(U)?(/\bIE\b/.test(E)&&"Mac OS"==Z&&(Z=null),E="identify"+E):(E="mask"+E,U=N?n(N.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(E)&&(Z=null),z||(H=null)),D=["Presto"],L.push(E)):U+=" Mobile",(E=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(e)||0)[1])&&(E=[parseFloat(E.replace(/\.(\d)$/,".0$1")),E],"Safari"==U&&"+"==E[1].slice(-1)?(U="WebKit Nightly",_="alpha",H=E[1].slice(0,-1)):H!=E[1]&&H!=(E[2]=(/\bSafari\/([\d.]+\+?)/i.exec(e)||0)[1])||(H=null),E[1]=(/\bChrome\/([\d.]+)/i.exec(e)||0)[1],537.36==E[0]&&537.36==E[2]&&parseFloat(E[1])>=28&&"WebKit"==D&&(D=["Blink"]),z&&(B||E[1])?(D&&(D[1]="like Chrome"),E=E[1]||(E=E[0],E<530?1:E<532?2:E<532.05?3:E<533?4:E<534.03?5:E<534.07?6:E<534.1?7:E<534.13?8:E<534.16?9:E<534.24?10:E<534.3?11:E<535.01?12:E<535.02?"13+":E<535.07?15:E<535.11?16:E<535.19?17:E<536.05?18:E<536.1?19:E<537.01?20:E<537.11?"21+":E<537.13?23:E<537.18?24:E<537.24?25:E<537.36?26:"Blink"!=D?"27":"28")):(D&&(D[1]="like Safari"),E=E[0],E=E<400?1:E<500?2:E<526?3:E<533?4:E<534?"4+":E<535?5:E<537?6:E<538?7:E<601?8:"8"),D&&(D[1]+=" "+(E+="number"==typeof E?".x":/[.+]/.test(E)?"":"+")),"Safari"==U&&(!H||parseInt(H)>45)&&(H=E)),"Opera"==U&&(E=/\bzbov|zvav$/.exec(Z))?(U+=" ",L.unshift("desktop mode"),"zvav"==E?(U+="Mini",H=null):U+="Mobile",Z=Z.replace(RegExp(" *"+E+"$"),"")):"Safari"==U&&/\bChrome\b/.exec(D&&D[1])&&(L.unshift("desktop mode"),U="Chrome Mobile",H=null,/\bOS X\b/.test(Z)?(J="Apple",Z="iOS 4.3+"):Z=null),H&&0==H.indexOf(E=/[\d.]+$/.exec(Z))&&e.indexOf("/"+E+"-")>-1&&(Z=s(Z.replace(E,""))),D&&!/\b(?:Avant|Nook)\b/.test(U)&&(/Browser|Lunascape|Maxthon/.test(U)||"Safari"!=U&&/^iOS/.test(Z)&&/\bSafari\b/.test(D[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(U)&&D[1])&&(E=D[D.length-1])&&L.push(E),L.length&&(L=["("+L.join("; ")+")"]),J&&q&&q.indexOf(J)<0&&L.push("on "+J),q&&L.push((/^on /.test(L[L.length-1])?"":"on ")+q),Z&&(E=/ ([\d.+]+)$/.exec(Z),k=E&&"/"==Z.charAt(Z.length-E[0].length-1),Z={architecture:32,family:E&&!k?Z.replace(E[0],""):Z,version:E?E[1]:null,toString:function(){var e=this.version;return this.family+(e&&!k?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(E=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(V))&&!/\bi686\b/i.test(V)?(Z&&(Z.architecture=64,Z.family=Z.family.replace(RegExp(" *"+E),"")),U&&(/\bWOW64\b/i.test(e)||z&&/\w(?:86|32)$/.test(v.cpuClass||v.platform)&&!/\bWin64; x64\b/i.test(e))&&L.unshift("32-bit")):Z&&/^OS X/.test(Z.family)&&"Chrome"==U&&parseFloat(H)>=39&&(Z.architecture=64),e||(e=null);var Q={};return Q.description=e,Q.layout=D&&D[0],Q.manufacturer=J,Q.name=U,Q.prerelease=_,Q.product=q,Q.ua=e,Q.version=U&&H,Q.os=Z||{architecture:null,family:null,version:null,toString:function(){return"null"}},Q.parse=c,Q.toString=O,Q.version&&L.unshift(H),Q.name&&L.unshift(U),Z&&U&&(Z!=String(Z).split(" ")[0]||Z!=U.split(" ")[0]&&!q)&&L.push(q?"("+Z+")":"on "+Z),L.length&&(Q.description=L.join(" ")),Q}var p={function:!0,object:!0},u=p[typeof window]&&window||this,d=u,f=p[typeof exports]&&exports,S=p[typeof module]&&module&&!module.nodeType&&module,x=f&&S&&"object"==typeof global&&global;!x||x.global!==x&&x.window!==x&&x.self!==x||(u=x);var h=Math.pow(2,53)-1,m=/\bOpera/,g=this,O=Object.prototype,y=O.hasOwnProperty,M=O.toString,P=c();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(u.platform=P,define(function(){return P})):f&&S?r(P,function(e,t){f[t]=e}):u.platform=P}).call(this);

/**
 * The SDK output verbosity can be controlled by using one of the values below.
 *
 * @readonly
 * @global
 *
 * @enum D360LoggerSeverity {string}
 * @property {string} NONE "NONE"       Completely silent
 * @property {string} ERROR "ERROR"     Log errors only
 * @property {string} WARNING "WARNING" Log errors and warnings
 * @property {string} INFO "INFO"       Log errors, warnings and info messages
 * @property {string} DEBUG "DEBUG"     Allow all the logs including debugging messages
 *
 */
window.D360LoggerSeverity = Object.freeze({
    NONE: "NONE",
    ERROR: "ERROR",
    WARNING: "WARNING",
    INFO: "INFO",
    DEBUG: "DEBUG"
});

var D360Logger = function() {
    this.severity = "ERROR";
};

/**
 * @param {string} severity
 */
D360Logger.prototype.setSeverity = function(severity) {
    this.severity = severity;
}

D360Logger.prototype.log = function(type, message, group, payload) {
    if(this.severity == D360LoggerSeverity.NONE) {
        return ;
    }
    if(this.severity == D360LoggerSeverity.ERROR && type == D360LoggerSeverity.ERROR) {
        console.log((group?(group+": "):'')+message, payload);
    }
    if(
        this.severity == D360LoggerSeverity.WARNING &&
        ([D360LoggerSeverity.ERROR, D360LoggerSeverity.WARNING].indexOf(type) > -1)
    ) {
        console.log((group?(group+": "):'')+message, payload);
    }
    if(
        this.severity == D360LoggerSeverity.INFO &&
        ([D360LoggerSeverity.ERROR, D360LoggerSeverity.WARNING, D360LoggerSeverity.INFO].indexOf(type) > -1)
    ) {
        console.log((group?(group+": "):'')+message, payload);
    }
    if(
        this.severity == D360LoggerSeverity.DEBUG
    ) {
        console.log((group?(group+": "):'')+message, payload);
    }
}

/**
 *
 * @class
 * @property {string} userId external user ID
 * @property {string} appId 360 backend App ID
 * @property {string} apiSecret 360 API secret
 */
var D360PushConfig = {};
D360PushConfig.userId = '';
D360PushConfig.appId = D360Options.appId;
D360PushConfig.apiSecret = D360Options.apiSecret;

/**
 *
 * @class class used to parse initial config and load data persisten in local storage
 * @param {D360Logger} logger 360 logger
 */
var D360SDKConfigHandler = function (logger) {
    this.logger = logger;
    this.configData = {};
};

/**
 * load initial config data
 *
 * @method
 * @param {object}
 */
D360SDKConfigHandler.prototype.init = function (configData) {
    this.configData = configData;
    if (!this.configData) {
        this.configData = {};
    }
}

/**
 * load initial config data
 *
 * @method
 * @param {D360} commandBus D360 event handler
 */
D360SDKConfigHandler.prototype.bootstrap = function (commandBus) {
    if (this.configData.requestPushOnLoad) {
        commandBus.push(['requestPushNotification']);
    }
}

/**
 * load user data from localStorage
 *
 * @method
 * @return {object}
 */
D360SDKConfigHandler.prototype.getExternalUserData = function () {
    if (this.configData.userId != null) {
        return {userId: this.configData.userId};
    }
    this.logger.log(D360LoggerSeverity.DEBUG, 'local storage externalUserData', 'D360SDKConfigHandler', window.localStorage.D360_externalUserData);
    if (window.localStorage && window.localStorage.D360_externalUserData) {
        try {
            return JSON.parse(window.localStorage.D360_externalUserData);
        } catch (e) {
        }
    }
    return {};
}

/**
 * @class service worker helper class
 */
var D360PushServiceWorkerHelper = function() {}

/**
 * convert VAPID key to UINT used by service worker JS implementation
 *
 * @method
 * @param base64String {string} public push key in base64
 * @returns {Uint8Array}
 */
D360PushServiceWorkerHelper.prototype.convertBaseToUint = function (base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

/**
 * class that store current push state
 *
 * @class
 * @property activeSubscription {PushSubscription} current subscription information
 * @property externalData {object}  current external user data - currently only userId is supported
 * @param {D360Logger} logger 360 logger
 */
function D360PushState(logger) {
    this.activeSubscription = null;
    this.externalData = {};
    this.logger = logger;
};

/**
 * load initial configuration based on initial data
 *
 * @method
 * @param {D360PushConfig} configHandler
 */
D360PushState.prototype.initConfig = function (configHandler) {
    this.externalData = configHandler.getExternalUserData();
    this.logger.log(D360LoggerSeverity.DEBUG, 'loaded external user data', 'D360PushState', this.externalData);
}

/**
 * get current subscription
 *
 * @method
 * @param {?PushSubscription} configHandler
 */
D360PushState.prototype.getActiveSubscription = function () {
    return this.activeSubscription;
}

/**
 * set new subscription data
 *
 * @method
 * @param {PushSubscription} subscription new subscription data
 */
D360PushState.prototype.setActiveSubscription = function (subscription) {
    this.activeSubscription = subscription;
}

/**
 * get external user data
 *
 * @method
 * @return {object} current user data
 */
D360PushState.prototype.getExternalUserData = function () {
    return this.externalData;
}

/**
 * update extenral user data
 *
 * @method
 * @param {object} data external user data
 */
D360PushState.prototype.setExternalUserData = function (data) {
    this.externalData = data;
    window.localStorage.D360_externalUserData = JSON.stringify(data);
    if(this.pushEngine) {
        this.pushEngine.updateConfiguration();
    }
}

/**
 * wipe device data
 *
 * @method
 * @param {object} data external user data
 */
D360PushState.prototype.wipeDeviceData = function (data) {
    window.localStorage.setItem('D360_externalUserData', null);
    window.localStorage.setItem('D360_appInstanceId', null);
    window.localStorage.setItem('D360deviceId', null);
    var me = this;
    var indexDBOpener = indexedDB.deleteDatabase("D360SWDB");
    indexDBOpener.onerror = function(event) {
        me.logger.log(D360LoggerSeverity.ERROR, 'removal error', 'indexeddb', event)
    };

    indexDBOpener.onsuccess = function(event) {
        me.logger.log(D360LoggerSeverity.ERROR, 'DB successfully removed', 'indexeddb', event)
    };

    navigator.serviceWorker.getRegistration('./d360-sw.js').then(function(registration) {
        console.log(registration);
        registration.unregister().then(function() {
            this.logger.log(D360LoggerSeverity.ERROR, 'Service worker successfully unregistered. Reload your page', 'D360PushState')
        })
    }).catch(function() {
        this.logger.log(D360LoggerSeverity.ERROR, 'Service worker not found', 'D360PushState', event)
    })
}

/**
 * cancel current subscription
 *
 * @method
 */
D360PushState.prototype.unsubscribe = function () {
    if (this.activeSubscription) {
        var cancelledSubscription = this.activeSubscription;
        var me = this;

        this.activeSubscription.unsubscribe().then(function (successful) {
            // @todo notify backend about cancelled subscription
            me.activeSubscription = null;
        });
    }
}

/**
 * get current Session id
 *
 * @method
 * @returns {string}
 */
D360PushState.prototype.getSessionId = function () {
    var sessionId = window.sessionStorage.sessionId;
    if (!sessionId) {
        sessionId = this.eventEmitter.generateUUID();
        window.sessionStorage.sessionId = sessionId;
    }
    return sessionId;
}


/**
 * @param {D360PushConfig} Inital push configuration
 * @param {D360PushState} Push state
 * @param {D360Logger} logger 360 logger
 *
 * @constructor
 */
function D360EventEmitter(pushConfig, state, logger) {
    this.pushConfig = pushConfig;
    this.state = state;
    this.logger = logger;

    this.state.eventEmitter = this;
}

/**
 * @method
 * @returns {string}
 */
D360EventEmitter.prototype.generateUUID = function () {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

/**
 * prepare template for 360 event objects
 *
 * @method
 * @returns {object}
 */
D360EventEmitter.prototype.prepareRawEventObject = function () {
    var appInstanceId = window.localStorage.getItem('D360_appInstanceId');
    if(!appInstanceId) {
        appInstanceId = this.generateUUID();
        window.localStorage.setItem('D360_appInstanceId', appInstanceId);
    }

    var payload = {};
    payload.environment = {
        sdk_version: "0.1.1",
        app_id: this.pushConfig.appId,
        app_instance_id: appInstanceId
    }
    payload.device = {
        platform: 'web',
        locale: window.navigator.language,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        browser_name: platform.name,
        browser_version: platform.version,
        browser_ua: platform.ua,
        os_version: platform.os.version,
        os_name: platform.os.family
    }
    payload.events = [
        {
            id: this.generateUUID(),
            session_id: this.generateUUID(),
        }
    ];
    return payload;
}

/**
 * 360 event emitter
 *
 * @method
 *
 * @param {string} event event name
 * @param {string} props event payload
 */
D360EventEmitter.prototype.emit = function (event, props) {
    var eventPayload = props;
    D360Push.sendEvent(event, eventPayload)
}

/**
 * Main sdk class
 *
 * @param {!D360PushConfig} pushConfig
 * @param {!D360PushServiceWorkerHelper} serviceWorkerHelper
 * @param {!D360PushState} state
 * @param {!D360EventEmitter} eventEmitter
 * @param {!D360Logger} logger 360 logger
 * @constructor
 */
function D360Push(pushConfig, serviceWorkerHelper, state, eventEmitter, logger) {
    this.pushConfig = pushConfig;
    this.serviceWorkerHelper = serviceWorkerHelper;
    this.state = state;
    this.eventEmitter = eventEmitter;
    this.logger = logger;
    this.deviceId = null;
    this.serviceWorkerRegistration = null;

    state.pushEngine = this;
}

/**
 * check if push is supported by browser
 *
 * @method
 * @returns {boolean}
 */
D360Push.prototype.isPushSupported = function () {
    return ('serviceWorker' in navigator && 'PushManager' in window);
}

/**
 * transmit 360 event to service worker
 *
 * @method
 * @param {!string} event
 * @param {!object} payload
 */
D360Push.prototype.sendEvent = function (event, payload) {
    this.sendWorkerMessage('sendEvent', {event: event, sessionId: this.state.getSessionId(), props: payload})
}

/**
 * transmit service worker message
 *
 * @method
 * @param {!string} command
 * @param {!object} mesasge
 */
D360Push.prototype.sendWorkerMessage = function (command, message) {
    var subject = this.serviceWorkerRegistration;
    if (!subject && window.navigator.serviceWorker.controller) {
        subject = window.navigator.serviceWorker.controller;
    }
    if (subject)
        subject.postMessage({
            command: command,
            message: message
        })

}

/**
 * handle push subscription update and send event to backend
 *
 * @method
 */
D360Push.prototype.updateConfiguration = function () {
    this.serviceWorkerRegistration.postMessage({
        command: "configuration",
        message: {
            pushConfig: D360PushConfig,
            eventTemplate: this.eventEmitter.prepareRawEventObject(),
            deviceId: this.deviceId,
            sessionId: this.state.getSessionId(),
            externalUserId: this.state.getExternalUserData() ? this.state.getExternalUserData().userId : null,
            activeSubscription: this.state.getActiveSubscription()
        }
    });
}

/**
 * initialize push SDK
 *
 * @method
 * @param {callback} callback function that is called when service worker initialization is done
 */
D360Push.prototype.initServiceWorker = function (callback) {
    if (!this.isPushSupported()) {
        this.logger.log(D360LoggerSeverity.ERROR, 'Push notifications not supported', 'core')
        return ;
    }
    this.logger.log(D360LoggerSeverity.DEBUG, 'Push notifications are supported', 'core')

    var me = this;

    navigator.serviceWorker.addEventListener('message', function (event) {
        if (event.data.command == 'registeredDevice') {
            me.logger.log(D360LoggerSeverity.DEBUG, 'Device registration received', 'core', event.data.properties);
            window.localStorage.D360deviceId = JSON.stringify(event.data.properties);
            if(me.state.getActiveSubscription()) {
                me.sendSubscriptionUpdateEvent(me.state.getActiveSubscription());
            }
        }
    })

    navigator.serviceWorker.register('/d360-sw.js')
        .then(function (registration) {
            me.deviceId = null;
            if (window.localStorage.D360deviceId) {
                me.deviceId = JSON.parse(window.localStorage.D360deviceId);
            }

            me.serviceWorkerRegistration = registration.active;

            if (!me.serviceWorkerRegistration && registration.installing) {
                me.serviceWorkerRegistration = registration.installing;
            }

            me.updateConfiguration();
        });

    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
        this.serviceWorkerRegistration = serviceWorkerRegistration;
        serviceWorkerRegistration.pushManager.getSubscription().then(function (subs) {
            me.state.setActiveSubscription(subs);
        });

        if (callback) {
            callback();
        }
    });
}

/**
 * return 360 deviceId
 *
 * @method
 * @returns {?string}
 */
D360Push.prototype.getDeviceId = function () {
    return this.deviceId ? this.deviceId.device_id : null;
}

/**
 * request push notification
 *
 * @method
 */
D360Push.prototype.requestPushNotification = function () {
    var me = this;

    if (!this.isPushSupported()) {
        this.logger.log(D360LoggerSeverity.ERROR, 'Push notifications are not supported', 'core')
    }

    // We need the service worker registration to check for a subscription
    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
        serviceWorkerRegistration.pushManager.subscribe({
            userVisibleOnly: true,
        }).then(function (subs) {
            me.sendSubscriptionUpdateEvent(subs);
            me.state.setActiveSubscription(subs);
        }).catch(function (error) {
            this.logger.log(D360LoggerSeverity.ERROR, 'Push subscription error', 'core', error)
        });
        ;
    })
}

/**
 *
 * @method
 * @param subscription {PushSubscription} subscription information
 */
D360Push.prototype.sendSubscriptionUpdateEvent = function(subscription) {
    var subscriptionData = subscription.toJSON();
    var payload = subscriptionData.keys;
    payload.endpoint = subscriptionData.endpoint;
    this.eventEmitter.emit("d360_push_token_update", payload);
}

/**
 * start subscription cancellation process
 *
 * @method
 */
D360Push.prototype.unsubscribe = function () {
    if (this.state.getActiveSubscription()) {
        var cancelledSubscription = this.state.getActiveSubscription();
        var me = this;

        this.state.getActiveSubscription().unsubscribe().then(function (successful) {
            me.state.setActiveSubscription(null);
        });
    }
}

/**
 * handle SDK command
 *
 * @param {string} command requested command
 * @param {object} payload requested payload
 * @returns {mixed}
 */
D360Push.prototype.handleCommand = function (command, payload) {
    if (!this.isPushSupported()) {
        return false;
    }

    if (command == 'requestPushNotification') {
        D360Push.requestPushNotification();
    }
    if (command == 'unregister') {
        this.unsubscribe();
    }
    if (command == 'updateExternalData') {
        this.state.setExternalUserData(payload);
    }
    if (command == 'wipeDeviceData') {
        this.state.wipeDeviceData();
    }
}

// bootstraping

if (!window.D360) {
    var D360 = [];
}

var logger = new D360Logger();
logger.setSeverity(D360LoggerSeverity.INFO);

var configHandler = new D360SDKConfigHandler(logger);
configHandler.init(D360Options);

var pushState = new D360PushState(logger);
pushState.initConfig(configHandler);

var serviceWorkerHelper = new D360PushServiceWorkerHelper();
var eventEmitter = new D360EventEmitter(D360PushConfig, pushState, logger);
var pushEngine = new D360Push(D360PushConfig, serviceWorkerHelper, pushState, eventEmitter, logger);
pushEngine.initServiceWorker(function () {
    configHandler.bootstrap(D360);
});

var row;
while (row = D360.shift()) {
    D360Push.handleCommand(row[0], row[1]);
}

D360.getDeviceId = function () {
    return D360Push.getDeviceId();
}

D360.push = function () {
    var original = Array.prototype.push;
    D360Push.handleCommand(arguments[0], arguments[1]);
    return Array.prototype.push.apply(this, arguments);
}

window.D360Push = pushEngine;
window.D360PushState = pushState;
