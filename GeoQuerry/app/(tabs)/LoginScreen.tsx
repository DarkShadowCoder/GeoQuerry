import { Colors } from '@/constants/Colors';
import { SignedIn, SignedOut, useOAuth, useUser } from '@clerk/clerk-expo'
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as WebBrowser from "expo-web-browser"
import { useWarmUpBrowser } from '@/hooks/WarmUpBrowser';

WebBrowser.maybeCompleteAuthSession()
export default function LoginScreen() {
  //const { user } = useUser()
  useWarmUpBrowser()

  const {startOAuthFlow} = useOAuth({ strategy: 'oauth_google'})

  const onPress = async() =>{
    try {
      const { createdSessionId, signIn, signUp, setActive} = 
      await startOAuthFlow()

      if (createdSessionId){
        setActive ({ session: createdSessionId})
      }else{
        //use SIGNiN OR sIGNuP FOR NEXT STEPS
      }
    }
    catch (error){
      console.log("OAuth error: ", error)
    }
  }
  return (
    <View style={styles.container}>
      <LinearGradient 
        // Background Linear Gradient
        colors={[ Colors.PRIMARY, Colors.WHITE]}
        style={styles.containerBackground}
      />
      <Image source={require('@/assets/images/Image3.png')}
      alt='background'
      style={{
        objectFit: "contain",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 10,
      }}
      />
      <Image source={require('@/assets/images/user.png')}
        alt='Smart Attend'
        style={{
          width: 175,
          height: 100,
          zIndex: 20,
          objectFit: "contain"
        }}
        />
        <Text style={{
          color: Colors.PRIMARY,
          fontSize: 30,
          fontFamily: "outfit-medium",
          marginTop: 10,
          zIndex: 20,
        }}>Welcome to Smart Attend</Text>
        <TouchableOpacity
        onPress={() => console.log("Press Login")}
        style={{
          backgroundColor: Colors.WHITE,
          borderRadius: 30,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20,
          width: 300,
          height: 55,
          marginVertical: 35
        }}
        >
          <Text style={{
            color: Colors.PRIMARY,
            fontSize: 25,
            fontFamily: "outfit-medium",
            zIndex: 20,
          }}>Se connecter</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: "100%",
    backgroundColor: Colors.WHITE,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBackground:{
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  }
})