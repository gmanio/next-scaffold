import { GTMEventData } from 'src/utils/gtm';

declare global {
  interface Window {
    isMobile: boolean;
    dataLayer: GTMEventData[];
  }
}
