import React, {memo} from 'react'
import { StyleSheet, View, Text } from 'react-native'


const RightChat = memo(({text}: any) => (
    <View style={{
        backgroundColor: "#0078fe",
        padding:10,
        marginLeft: '45%',
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        
        borderRadius: 10,
      }} key={0}
    >
      <Text style={{ fontSize: 11, fontWeight: '200', color: "red",justifyContent:"center", marginBottom: 3}}> {`~ you`}</Text>
      <Text style={{ fontSize: 16, color: "#fff", }} key={0}>{text}</Text>
      <View style={styles.rightArrow}></View>
      <View style={styles.rightArrowOverlap}></View>
    </View>
))

const styles = StyleSheet.create({
    rightArrow: {
        position: "absolute",
        backgroundColor: "#0078fe",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomLeftRadius: 25,
        right: -10
      },
      
      rightArrowOverlap: {
        position: "absolute",
        backgroundColor: "#fff",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomLeftRadius: 18,
        right: -20
      
      },
})

export default RightChat