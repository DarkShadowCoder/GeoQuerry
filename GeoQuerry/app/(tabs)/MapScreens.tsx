import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const MapScreen = () => {
  return (
    <View>
      <MapView style={styles.map} 
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      />
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container:{

  },
  map:{
    width: "100%",
    height: "100%"
  }
})