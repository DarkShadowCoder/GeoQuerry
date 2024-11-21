import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '@/constants/Colors'

const ContentItems = (props) => {
  return (
    <View style={styles.container}>
        <Image source={props.image} 
        alt='cours'
        style={{
            objectFit: 'fill',
            width: '30%',
            height: '100%',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: Colors.dark.gray
        }} />
        <View style={styles.contentText}>
            <Text style={styles.teacher}>
                {props.teacher}
            </Text>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <View style={styles.optionsContainer}>
                <View style={{
                    flexDirection: 'row',
                    width: "auto",
                    height: "100%",
                    alignItems: "center",
                    gap: 4,
                }}>
                    <Ionicons name="calendar" size={15} color={Colors.light.gray} />
                    <Text style={{
                        fontSize: 15,
                        fontFamily: 'outfit',
                        textAlign: 'left',
                        color: Colors.light.gray
                    }}>
                        {props.date}
                    </Text>
                </View>
                <Ionicons 
                name='send-outline' 
                size={20} 
                color={Colors.light.primary} 
                style={{
                    fontFamily: 'outfit-medium',
                    fontWeight: 'bold',
                }}
                />
            </View>
        </View>
    </View>
  )
}

export default ContentItems

const styles = StyleSheet.create({
    container:{
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15,
        borderRadius: 20,
        width: '100%',
        height: 175,
        backgroundColor: Colors.dark.text,
        shadowColor: Colors.light.gray,
        elevation: 10,
        shadowOffset: {width: 8, height: 9},
        shadowRadius: 7,
        shadowOpacity: 0.8,
    },
    optionsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 50,
        paddingVertical: 5,
        paddingHorizontal: 2
    },
    contentText:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '68%',
        height: '100%',
    },
    teacher:{
        fontSize: 20,
        fontFamily: 'outfit',
        color: Colors.light.gray,
        textAlign: 'left',
    },
    title:{
        fontSize: 24,
        fontFamily: 'outfit-medium',
        color: Colors.light.text,
        textAlign: 'left',
    }
})