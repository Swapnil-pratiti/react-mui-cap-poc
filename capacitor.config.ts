import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.react.mui',
  appName: 'react-mui-cap-poc',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
