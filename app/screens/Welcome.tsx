import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Caption, Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Welcome = ({navigation}: any) => {

    return (
        <View style={styles.container}>
          <Surface style={styles.surface}>
            <TouchableOpacity style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
                onPress={() => navigation.navigate("Home")}
            >
              <Icon size={90} name="baby" />
              <Text>Parenting Guide</Text>
            </TouchableOpacity>
          </Surface>
    
          <Surface style={styles.surface}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
            >
              <Icon size={80} name="comments" />
              <Text>Chat</Text>
            </TouchableOpacity>
          </Surface>
      </View>
      );
}

export default Welcome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    surface: {
      padding: 8,
      height: '35%',
      width: '80%',
      marginHorizontal: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
    },
  });