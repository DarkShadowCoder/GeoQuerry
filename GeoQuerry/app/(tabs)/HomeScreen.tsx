import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { Colors } from '@/constants/Colors'
import ContentItems from '@/components/ContentItems'


const Home = () => {
  //const { user } = useUser()
  const cours = false
  return (
    <View>
        <View style={styles.container}>
          <Image source={require('@/assets/images/Image2.png')}
            alt='Background'
            style={{
              zIndex: -50,
              position: "absolute",
              objectFit: "contain"
            }}
            />
            <Header />
            <View style={styles.hero}>
            </View>
            
            <View style={styles.mainContainer}>
              <Text style={styles.title}>
                Programmes
              </Text>
              {cours && (
                <ContentItems 
                image={require('@/assets/images/react-logo.png')}
                teacher={"Dr. MAKA MAKA EBENEZER"}
                title = {"Audit et Securité des Systemes d'informations"}
                date="14 November"
                />
              )||
              <View style={styles.notContent}>
                <Text style={{
                  fontSize: 25,
                  fontFamily: 'outfit',
                  color: Colors.SECONDARY,
                }}>Aucun cours Programmé</Text>
              </View>
              }
            </View>

          </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 25,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE
  },
  hero:{

  },
  mainContainer:{
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    gap: 15,
  },

  title:{
    textAlign: 'left',
    width: '100%',
    height: "auto",
    fontSize: 24,
    fontFamily: 'outfit-medium',
    letterSpacing: 1.2
  },

  notContent:{
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})