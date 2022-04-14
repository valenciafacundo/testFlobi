import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
const Club = ({navigation}) => {
  return (
    <View style={{ marginTop: 30, backgroundColor: "red" }}>
      <TouchableOpacity
        style={{ margin: 20 }}
        onPress={() => navigation.navigate("Clubes")}
      >
        <Text>Clubes</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Club