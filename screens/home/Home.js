import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
const Home = ({ navigation }) => {
  return (
    <>
      <View style={{ marginTop: 30 , backgroundColor:"blue"}}>
        <TouchableOpacity
        style={{margin:20}}
          onPress={()=>navigation.navigate("CrearAnuncio")}
        >
          <Text>CrearAnuncio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{margin:20}}
          onPress={()=>navigation.navigate("Likes")}
        >
          <Text>Likes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{margin:20}}
          onPress={()=>navigation.navigate("Matches")}
        >
          <Text>Matches</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{margin:20}}
          onPress={()=>navigation.navigate("MesaDetalle")}
        >
          <Text>MesaDetalle</Text>
        </TouchableOpacity>

      </View>

    </>
  );
};

export default Home;
