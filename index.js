/*
  @TODO добавить все функции проверок
  @DONE функцию для возвращения браузера
*/

class BrowserDetect {

  constructor() {
    let _ua = navigator.userAgent.toLowerCase();

    this.browsers = {
      opera: (/opera/i.test(_ua) || /opr/i.test(_ua)),
      msie: (/msie/i.test(_ua) && !/opera/i.test(_ua) || /trident\//i.test(_ua)) || /edge/i.test(_ua),
      msie6: (/msie 6/i.test(_ua) && !/opera/i.test(_ua)),
      msie7: (/msie 7/i.test(_ua) && !/opera/i.test(_ua)),
      msie8: (/msie 8/i.test(_ua) && !/opera/i.test(_ua)),
      msie9: (/msie 9/i.test(_ua) && !/opera/i.test(_ua)),
      msie_edge: (/edge/i.test(_ua) && !/opera/i.test(_ua)),
      mozilla: /firefox/i.test(_ua),
      chrome: /chrome/i.test(_ua) && !/edge/i.test(_ua),
      safari: (!(/chrome/i.test(_ua)) && /webkit|safari|khtml/i.test(_ua)),
      iphone: /iphone/i.test(_ua),
      ipod: /ipod/i.test(_ua),
      iphone4: /iphone.*OS 4/i.test(_ua),
      ipod4: /ipod.*OS 4/i.test(_ua),
      ipad: /ipad/i.test(_ua),
      android: /android/i.test(_ua),
      bada: /bada/i.test(_ua),
      mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(_ua),
      msie_mobile: /iemobile/i.test(_ua),
      safari_mobile: /iphone|ipod|ipad/i.test(_ua),
      opera_mobile: /opera mini|opera mobi/i.test(_ua),
      opera_mini: /opera mini/i.test(_ua),
      mac: /mac/i.test(_ua),
      search_bot: /(yandex|google|stackrambler|aport|slurp|msnbot|bingbot|twitterbot|ia_archiver|facebookexternalhit)/i.test(_ua)
    }; 

    this.version = (_ua.match( /.+(?:me|ox|on|rv|it|era|opr|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1];   
  }

  isBrowser() {
    let browserKeys = Object.keys(this.browsers),
      browserName;

    for (let i = 0; i < browserKeys.length; i++) {
      if (this.browsers[browserKeys[i]]) browserName = browserKeys[i]; 
    } 

    return browserName;  
  }

  isIe(version_ie) {
    if (!version_ie) {
      return this.browsers.msie ? true : false;
    }

    if (version_ie >= 6 && version_ie <= 9) {
      return this.browsers[`msie${version_ie}`] ? true : false;
    } else {
      throw new Error('BrowserDetect dont support this version ie.');
    }
  }

  isEdge() {
    return this.browsers.msie_edge ? true : false;
  }

  isOpera() {
    return this.browsers.opera ? true : false;
  }

  isChrome() {
    return this.browsers.chrome ? true : false;    
  }

  isMozilla() {
    return this.browsers.mozilla ? true : false; 
  }

  isSafari() {
    return this.browsers.safari ? true : false; 
  }
}
