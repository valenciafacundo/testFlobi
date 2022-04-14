import React from 'react'
import { Text ,View,TouchableOpacity} from 'react-native'
const Torneos = ({navigation}) => {
  return (
    <View style={{ marginTop: 30, backgroundColor: "red" }}>
    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("CalentarioTorneo")}
    >
      <Text>CalentarioTorneo</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("Comentarios")}
    >
      <Text>Comentarios</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("Inscripciones")}
    >
      <Text>Inscripciones</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("NoticiaDetalle")}
    >
      <Text>NoticiaDetalle</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("Noticias")}
    >
      <Text>Noticias</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("Ranking")}
    >
      <Text>Ranking</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("ResultadoDetalle")}
    >
      <Text>ResultadoDetalle</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("Resultados")}
    >
      <Text>Resultados</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("TorneoDetalle")}
    >
      <Text>TorneoDetalle</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={() => navigation.navigate("TorneoEnCurso")}
    >
      <Text>TorneoEnCurso</Text>
    </TouchableOpacity>
  </View>
   )
}

export default Torneos