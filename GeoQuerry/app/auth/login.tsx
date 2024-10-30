import { Button, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import React, { useState } from 'react';
import { Link, useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

const Login = () => {
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  return (
    <View style={styles.loginScreen}>
        <View style={styles.imageContainer}>
            {/* Partie pour inserer l'image */}
        </View>
      <View style={styles.FormContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>
            EMAIL ADDRESS
          </Text>
          <View style={styles.textContainer}>
            <TextInput 
            style={styles.inputText} 
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => {setEmail(text);}} 
            />
            <Ionicons name='mail' size={25} color={"gray"}/>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>
            PASSWORD
          </Text>
          <View style={styles.textContainer}>
            <TextInput 
            style={styles.inputText} 
            value={password}
            onChangeText={(text) => setPassword(text)} 
            />
            <Ionicons name='eye' size={25} color="gray"/>
          </View>
          
        </View>
        <View style={styles.rememberContainer}>
          <View style={styles.rememberRight}>

            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
          <View style={styles.rememberLeft}>
            <Link href={'/auth/signup'} style={styles.forgotPassword}>Forgot Password</Link>
          </View>
        </View>

        <Button onPress={()=> navigation} title='Log in'/>
        <View 
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          gap: 20,
          top: -15,
          alignContent: 'center',
          alignItems: 'center',
        }}
        >
          <Ionicons name='logo-facebook' size={30} color={"blue"}/>
          <Ionicons name='logo-google' size={30} color={"red"}/>
          <Ionicons name='logo-twitter' size={30} color={"sky"}/>
          <Ionicons name='logo-linkedin' size={30} color={"blue"}/>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginScreen:{
      flexDirection: 'column',
      width: '100%',
      padding: 20,
      paddingTop: 0,
      height: '100%',
      backgroundColor: 'white'
    },
    imageContainer:{
      height: '40%',
      marginBottom: 10,
    },
    FormContainer:{
      width: '100%',
      height: 'auto',
      padding: 10,
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 37,
    },
    inputContainer: {
      width: '100%',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      height: 45,
      paddingHorizontal: 5,
      paddingVertical: 2,
    },
    
    inputTitle:{
      fontSize: 16,
      position: 'absolute',
      top: -10,
      left: 10,
      fontWeight: 'semibold',
      zIndex: 10,
      backgroundColor: 'white',
      paddingHorizontal: 5,
    },
    textContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      top: 5,
      paddingHorizontal: 10
    },
    inputText:{
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
      width: '80%'
    },
    rememberContainer:{
      width: "100%",
      height: "auto",
      padding: 5,
      flexDirection: "row",
      top: -15,
      justifyContent: "space-between",
      alignItems: "center",
    },
    rememberRight:{
      flex: 1,
      gap: 10
    },
    rememberText:{
      fontSize: 16,
    },
    forgotPassword:{
      fontSize: 16,
      fontWeight: "heavy",
    },
    button:{
      borderRadius: 10,
    }


})