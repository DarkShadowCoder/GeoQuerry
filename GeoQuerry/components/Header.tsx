import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <View style={{}}>
          <Text style={{
            fontSize: 22,
            fontFamily: 'outfit',
            textAlign: 'left',

          }}>
            Good Morning,
          </Text>
          <Text style={{
            fontSize: 20,
            fontFamily: 'outfit',
            textAlign: 'left',
          }}>
            Yvan Landry
          </Text>
        </View>
        <View style={styles.headerRight}>
          <Ionicons 
          name='notifications-outline' 
          size={25}
          style={{
            borderColor: Colors.dark.gray,
            borderWidth: 1.5,
            textAlign: 'center',
            width: 40,
            height: 40,
            padding: 5,
            borderRadius: 20,
          }}
          />
          <Image 
          source={require('../assets/images/react-logo.png')} 
          alt='logo' 
          style={{
            objectFit: 'cover',
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: Colors.dark.background
          }}
          />
        </View>
      </View>
      <View style={styles.searchBar}>
        <Ionicons name='search' size={25} />
        <TextInput placeholder='Search courses...' 
        style={{
          textAlign: 'left',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80%',
          height: '100%',
          fontSize: 20,
          fontFamily: 'outfit',
          paddingHorizontal: 7
        }}
        />
        <Ionicons name="filter" size={25} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    paddingTop: 10
  },
  headerContainer:{
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerRight:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  searchBar:{
    backgroundColor: Colors.light.background,
    flexDirection: 'row',
    gap: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: Colors.light.gray,
    borderWidth: 1.5,
    borderRadius: 50,
    shadowColor: Colors.light.gray,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.7,
    elevation: 10,
  },
})