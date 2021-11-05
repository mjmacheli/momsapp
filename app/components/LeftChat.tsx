import React, {memo} from 'react'
import { StyleSheet, View, Text } from 'react-native';


const LeftChat = memo(({text}: any) => (
    <View style={{
        backgroundColor: "#dedede",
        padding:10,
        borderRadius: 10,
        marginTop: 5,
        marginLeft: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-start',
      }} key={2}
    >
      <Text style={{ fontSize: 16, color: "#000",justifyContent:"center" }}> {text}</Text>
      <View style={styles.leftArrow}></View>
      <View style={styles.leftArrowOverlap}></View>
    </View>
))

const styles = StyleSheet.create({
    leftArrow: {
        position: "absolute",
        backgroundColor: "#dedede",
        //backgroundColor:"red",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomRightRadius: 25,
        left: -10
    },
    
    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: "#fff",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomRightRadius: 18,
        left: -20
    
    },
})

export default LeftChat