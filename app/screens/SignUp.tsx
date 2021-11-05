import React, {useState, useContext} from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Button, Text, TextInput, Title } from 'react-native-paper'
import auth from '@react-native-firebase/auth';
import { UserContext } from '../context/UserContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Details = {
    email: string;
    password: string;
    fullname: string;
}

const SignUp = ({navigation}: any) => {

    // @ts-ignore
    const [ _, setUser] = useContext(UserContext);
    const [details, setDetails] = useState<Details>({
        email: "",
        password: "",
        fullname: "",

    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const handleRegister = () => {
        setLoading(true)
        auth()
        .createUserWithEmailAndPassword(details.email, details.password)
        .then(() => {
            setLoading(false)
            setUser(details.email)
            navigation.navigate("Camera", {
                user: details.email,
                nav: navigation
            })
        })
        .catch(error => {
            setLoading(false)
            if (error.code === 'auth/email-already-in-use') {
                setError('That email address is already in use!');
            }

            if (error.code === 'auth/weak-password') {
                setError(' Password should be at least 6 characters');
            }

            if (error.code === 'auth/invalid-email') {
                setError('invalid email');
            }

            console.error(error.message);
        });
    }

    return (
        <View style={styles.container}>
            <Icon size={90} name="baby" />
            <Text>Sign Up</Text>
            
                <View  style={{width: '95%'}}>
                    <TextInput
                        style={{backgroundColor: '#fff'}}
                        label="Full Names"
                        value={details.fullname}
                        onChangeText={text => setDetails({...details, fullname: text})}
                    />
                </View>
                <View  style={{width: '95%'}}>
                    <TextInput
                        style={{backgroundColor: '#fff'}}
                        label="Email"
                        keyboardType="email-address"
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
                <View  style={{width: '95%'}}>
                    <TextInput
                        secureTextEntry
                        style={{backgroundColor: '#fff'}}
                        label="Confirm password"
                        value={details.password}
                        onChangeText={text => setDetails({...details, password: text})}
                    />
                </View>
                <Button loading={loading} style={{width: '70%', marginTop: 15}} mode="contained" onPress={handleRegister}>
                    <Title>Sign up</Title>
                </Button>
                <Text style={{color: 'red', marginTop: 2}}>{error}</Text>
                <View style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                    <Text>have an account? </Text>
                    
                    <Pressable onPress={() => navigation.navigate("Login")} >
                        <Button>Login</Button>
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
})


export default SignUp