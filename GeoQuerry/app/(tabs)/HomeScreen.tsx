import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import Header from '@/components/Header'
import { Colors } from '@/constants/Colors'
import ContentItems from '@/components/ContentItems'


const Home = () => {
  //const { user } = useUser()
  const cours = false
  const [category, setCategory] = useState(false)
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
              <View style={styles.wrapperContainer}>
                <View style={category && styles.wrapperContent || 
                {
                  width: 150,
                  height: "auto",
                  paddingVertical: 10,
                  backgroundColor: Colors.BLACK,
                  borderRadius: 25,
                }}>
                  <Text style={category && {
                    fontFamily: "outfit",
                    fontSize: 20,
                    textAlign: "center",
                    color: Colors.BLACK
                  }||{
                    fontFamily: "outfit",
                    fontSize: 20,
                    textAlign: "center",
                    color: Colors.WHITE
                  }}>Cours </Text>
                </View>
                <View style={!category && styles.wrapperContent || 
                {
                  width: 150,
                  height: "auto",
                  paddingVertical: 10,
                  backgroundColor: Colors.BLACK,
                  borderRadius: 25,
                }}>
                  <Text style={!category && {
                    fontFamily: "outfit",
                    fontSize: 20,
                    textAlign: "center",
                    color: Colors.BLACK
                  }||{
                    fontFamily: "outfit",
                    fontSize: 20,
                    textAlign: "center",
                    color: Colors.WHITE
                  }}>Classe </Text>
                </View>
              </View>
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
            <TouchableOpacity
            onPress={()=> console.log('Course creation')}
            style={{
              backgroundColor: Colors.PRIMARY,
              borderRadius: 25,
              width: "100%",
              height: "auto",
              paddingVertical: 25,
              shadowColor: Colors.SECONDARY,
              shadowOffset: {width: 10,height: 5},
              shadowOpacity: 0.9,
              shadowRadius: 10,
              elevation: 12
            }}
            >
              <Text style={{
                fontFamily: "outfit-medium",
                fontSize: 25,
                textAlign: "center",
                color: Colors.BLACK
              }}>
                 Creer un nouveau Cours
              </Text>
            </TouchableOpacity>
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
  },
  wrapperContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "auto",
    paddingVertical: 15,

  },
  wrapperContent:{
    width: 150,
    height: "auto",
    paddingVertical: 10,
    borderColor: Colors.BLACK,
    backgroundColor: Colors.GRAY,
    borderRadius: 25,
  }
})