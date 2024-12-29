import { Platform, View } from 'react-native';

import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


import { globalStyles } from '@/styles/global-styles';

import * as NavigationBar from 'expo-navigation-bar';
const isAndroid = Platform.OS === 'android';
isAndroid && NavigationBar.setBackgroundColorAsync('black');




// rnfe <- create layout
const RootLayout = () => {
  ///* fonts ----------
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return (
    <View style={globalStyles.background}>
      {/* --- renderiza toda ruta hija del app directory app/ --- */}
      <Slot />

      {/* --- StatusBar (señan, bateria del cel) --- */}
      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
