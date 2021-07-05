import React, { useState } from 'react';
import Homestack from './navigation/Homestack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getfonts = () => Font.loadAsync({
  'Helvicta': require('./assets/fonts/HelveticaMedIt.ttf'),
});

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);

  const appLoading = () => {
    return (
      <AppLoading
        startAsync={getfonts}
        onFinish={() => setfontsLoaded(true)}
        onError={console.warn}
      />
    )
  }

  return (
    fontsLoaded ? <Homestack /> : appLoading()
  )
}

// const styles = StyleSheet.create({});
