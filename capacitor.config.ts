import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.darkwister.Test1',
  appName: 'Ionic Wister',
  webDir: 'www'
,
    android: {
       buildOptions: {
          keystorePath: 'd:\Files\ApkKey.jks',
          keystoreAlias: 'DarkWister',
       }
    }
  };

export default config;
