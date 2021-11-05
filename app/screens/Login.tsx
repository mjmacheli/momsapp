import React, {useContext, useState} from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput, Title } from 'react-native-paper'
import auth from '@react-native-firebase/auth';
import { UserContext } from '../context/UserContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Details = {
    email: string;
    password: string;
}

const Login = ({navigation}: any) => {

    const [error, setError] = useState(false)
    // const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    // @ts-ignore
    const [_ , setUser] = useContext(UserContext);
    const [details, setDetails] = useState<Details>({
        email: "",
        password: "",

    })

    const handleLogin = () => {
        console.log('dd ', details)
        setLoading(true)
        auth()
        .signInWithEmailAndPassword(details.email, details.password)
        .then(() => {
            setLoading(false)
            setUser(details.email)
            navigation.navigate("Welcome")
        })
        .catch(error => {
            setLoading(false)
            console.error('er: ', error)
            setError(true)
        });
    }

    const handlePasswordReset = () => {
        setLoading(true)
        auth()
        .sendPasswordResetEmail(details.email)
        .then(() => {
            setLoading(false)
            setUser('')
        })
        .catch(error => {
            setError(true)
            setLoading(false)
        });
    }

    return (
        <View style={styles.container}>
            <Icon size={90} name="baby" />
            <Text>Mama App</Text>
            
                <View  style={{width: '95%'}}>
                    <TextInput
                        style={{backgroundColor: '#fff'}}
                        label="Email"
                        value={details.email}
                        onChangeText={text => setDetails({...details, email: text.trim()})}
                    />
                </View>

                <View  style={{width: '95%'}}>
                    <TextInput
                        secureTextEntry
                        style={{backgroundColor: '#fff'}}
                        label="Password"
                        value={details.password}
                        onChangeText={text => setDetails({...details, password: text.trim()})}
                    />
                </View>
                <Button loading={loading}style={{width: '70%', marginTop: 15}} mode="contained" onPress={handleLogin}>
                    <Title>Login</Title>
                </Button>
                {error && <Text style={{color: 'red'}}>Incorrect username/password</Text>}
                <View  style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                    <Text>Dont have an account?</Text>
                    <Pressable onPress={() => navigation.navigate("Signup")} >
                        <Button>Register</Button>
                    </Pressable>
                </View>
                <Text style={{color: 'red', marginTop: 2}}>{error}</Text>
                <View  style={{display: 'flex', alignItems: 'center'}}>
                    <Text>Forgot password?</Text>
                    <Pressable onPress={handlePasswordReset} >
                        <Button loading={loading}>Reset</Button>
                    </Pressable>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
})


export default Login