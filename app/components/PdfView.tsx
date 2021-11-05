import React from 'react'
import { Button } from 'react-native-paper'
import Pdf from 'react-native-pdf';
import { View, SafeAreaView, StyleSheet } from 'react-native'

const PdfView = ({navigation, route}: any) => (
    <SafeAreaView  style={{ flex: 1}}>
       <View style={styles.container}>
                <Pdf
                    source={{uri:route.params.url,cache:true}}
                    // onLoadComplete={(numberOfPages,filePath)=>{
                    //     console.log(`number of pages: ${numberOfPages}`);
                    // }}
                    // onPageChanged={(page,numberOfPages)=>{
                    //     console.log(`current page: ${page}`);
                    // }}
                    // onError={(error)=>{
                    //     console.log(error);
                    // }}
                    // onPressLink={(uri)=>{
                    //     console.log(`Link presse: ${uri}`)
                    // }}
                    style={styles.pdf}/>
            </View>
    <Button 
    onPress={()=> navigation.goBack()}
    >Back</Button>
  </SafeAreaView>
)

export default PdfView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:'100%',
        height:'90%',
    }
});