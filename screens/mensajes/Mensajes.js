import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
const Mensajes = ({navigation}) => {
  return (
    <View style={{ marginTop: 30, backgroundColor: "orange" }}>
    <TouchableOpacity
      style={{ margin: 20 }}
      onPress={() => navigation.navigate("Chat")}
    >
      <Text>Chat</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Mensajes