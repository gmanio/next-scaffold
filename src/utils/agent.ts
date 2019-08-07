export const isMobile = (ua: string): boolean => /iPhone|iPad|iPod|Android/i.test(ua);
export const isIE = (): boolean => (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);
export const isLowIE = (): boolean => (isIE() && navigator.appVersion.indexOf('Trident/7.0') === -1);
export const isLocal = (): boolean => (window.location.href.indexOf(`://local`) !== -1);
export const isSafari = (): boolean => {
  const ua = window.navigator.userAgent.toLowerCase();
  return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
};
