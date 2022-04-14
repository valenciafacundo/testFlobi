import { NavigationContainer } from "@react-navigation/native";
import AutenticadoScreens from "./stacks/AutenticadoScreens";
import * as Linking from "expo-linking";
const prefix = Linking.createURL("/");
export default function App() {
  const config = {
    screens:{
      MensajesMap:{
        path:"mensajesMap",
        screens:{
          Mensajes:"mensajes",
          Chat:"chat",
        }
      },
      TorneosMap:{
        path:"torneosMap",
        
        }
      ,
      HomeMap:{
        path:"homeMap"
      },
      ClubesMap:{
        path:"clubesMap"
      },
      PerfilMap:{
        path:"perfilMap"
      }
    }
  }
  
  const linking = {
    prefixes: prefix,
    config,
  };
  return (
    <NavigationContainer linking={linking}>
      {AutenticadoScreens()}
    </NavigationContainer>
  );
}
