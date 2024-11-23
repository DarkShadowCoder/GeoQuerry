import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

const ProfileScreen = () => {
  const userInfo = {
    name: "yvan Landry",
    class: "Genie Logiciel 5"
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Image 
          source={require("@/assets/images/Image1.png")}
          alt='profile'
          style={{
          }}
          />
          <Text style={{}}>{userInfo.name}</Text>
          <Text>{userInfo.class}</Text>
        </View>
        
      </View>
      <View style={styles.subContainer}>

      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    paddingVertical: 35,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  topContainer:{

  },
  subContainer:{
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }
})