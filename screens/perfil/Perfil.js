import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
const Perfil = ({navigation}) => {
  return (
    <View style={{ marginTop: 30, backgroundColor: "pink" }}>
    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("ActualizarTelefono")}
    >
      <Text>ActualizarTelefono</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("CodigoActualizar")}
    >
      <Text>CodigoActualizar</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("Configuracion")}
    >
      <Text>Configuracion</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("Notificaciones")}
    >
      <Text>Notificaciones</Text>
    </TouchableOpacity>

    
  </View>
  )
}

export default Perfil