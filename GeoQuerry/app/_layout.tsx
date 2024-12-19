import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store'
import LoginScreen from './(tabs)/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { StyleSheet, Text, View } from 'react-native';
import Home from './(tabs)/HomeScreen';
import { MyTabs } from '@/components/navigation/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './(tabs)/MapScreens';
import * as Location from 'expo-location'


SplashScreen.preventAutoHideAsync();
const tokenCache = {
  async getToken(key){
    try {
      return SecureStore.getItemAsync(key);
    }catch (err) {
      return null;
    }
  },
  async setToken(key, value){
    try {
      return SecureStore.setItemAsync(key, value);
    }catch (err) {
      return ;
    }
  }
}

const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    }

    getCurrentLocation();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


export default function RootLayout() {
  const [loaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  
  //const {user} = useUser()
  return (
    /*<ClerkProvider 
    tokenCache={tokenCache}
    publishableKey={'pk_test_Y2FyaW5nLW1vbGUtNzEuY2xlcmsuYWNjb3VudHMuZGV2JA'}>
      <SignedIn>
        <MyTabs />
      </SignedIn>
      <SignedOut>
        <View style={styles.container}>
          <LoginScreen />
        </View>
      </SignedOut>
    </ClerkProvider>
    
   <NavigationContainer>
      <MyTabs />
   </NavigationContainer>
   */
  <Home />
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
  }
})