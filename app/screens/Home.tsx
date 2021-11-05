import React from "react";
import {View, Text} from 'react-native'
import { Button, Headline } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}: any) => (

    <View style={{height: '100%', display:'flex', flexDirection: 'column', justifyContent: 'center', marginHorizontal: '5%'}}>
        
        <View style={{marginBottom: '10%',  justifyContent: 'center',alignItems: 'center'}}>
            <Text></Text>
            <Icon size={90} name="baby" />
            <Headline>Welcome to Mommy App</Headline>
        </View>
        
         <Button  mode="contained" onPress={() => navigation.navigate("Login")}>
            Login
        </Button>
        <View style={{marginBottom: '10%'}}></View>
        <Button mode="outlined"  onPress={() => navigation.navigate("Signup")} >
            Register
        </Button>
    </View>

)

export default Home