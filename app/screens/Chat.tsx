import React, {useState, useEffect, useContext, useCallback} from 'react';
import { StyleSheet, ScrollView,View, Image} from 'react-native';
import { TextInput,Appbar, List, Text, Avatar  } from 'react-native-paper';
import LeftChat from '../components/LeftChat';
import RightChat from '../components/RightChat';
import { UserContext } from '../context/UserContext';
import { useIsFocused } from '@react-navigation/core';

const Chat = () => {
     // @ts-ignore
     const [user , setUser] = useContext(UserContext);
     const isFocused = useIsFocused();

     const [chats, setChats] = useState([])
     const [msg, setMsg] = useState('')
     const [check, setCheck] = useState(false)
     const [img, setImg] = useState('')

     const getChats = useCallback(async () => {
        let url = `https://momsapp.herokuapp.com/chats`;
        const response: Response = await fetch(url, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const {chats} = await response.json();
        setChats(chats)
    },[setChats])

    const handlePosting = async () => {
      let url = `https://momsapp.herokuapp.com/chats`;
      const data = {
        userId: user,
        text: msg, 
        image: " "
      }
      const response: Response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // @ts-ignore
      setChats([...chats, data])
      setMsg('')
      setCheck(!check)
    };

    const getAvatar = async () => {
      let url = `https://momsapp.herokuapp.com/avatar`;
      const data = {email: user}
      const response: Response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const {image} = await response.json()
      console.log('res ', image)
      setImg(image)
    };

    useEffect(() => {
      getChats()
    },[check])

    useEffect(() => {
      getAvatar()
  },[])

    return (
        <View style={styles.container}>
            <Appbar.Header style={{width: '100%'}}>
              <Avatar.Image size={45} source={{uri: `data:image/jpeg;base64,${img}`}} />
              <Appbar.Content title="Chats" subtitle="Find help and chat" />
            </Appbar.Header>
            <ScrollView>
                
               {
                   chats.map(chat => chat.userId === user ? <RightChat key={chat.id} text={chat.text}/> : <LeftChat  key={chat.id} text={chat.text}/>)
               }
                
            </ScrollView>
        <View  style={{alignSelf : 'flex-end', width: '100%', position: 'absolute', bottom: 0, marginTop: 50}}>
        <TextInput
          multiline
          label="Message"
          value={msg}
          onChangeText={text => setMsg(text)}
          right={<TextInput.Icon 
              onPress={handlePosting}
            name="telegram" />}
      />
    </View>
    </View>

    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        // justifyContent: 'fl',
      }
})