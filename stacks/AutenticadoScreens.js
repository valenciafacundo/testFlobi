import React from "react";
import { TabStack, TabRoute } from "../routing/routes";
import ClubesMap from "./ClubesMap";
import HomeMap from "./HomeMap";
import MensajesMap from "./MensajesMap";
import PerfilMap from "./PerfilMap";
import TorneosMap from "./TorneosMap";

const AutenticadoScreens = () => {
  return (
    <>
      <TabStack.Navigator
        initialRouteName={TabRoute.HomeTab}
        screenOptions={{ headerShown: false }}
      >
        <TabStack.Screen name={TabRoute.MensajesTab} component={MensajesMap} />
        <TabStack.Screen name={TabRoute.TorneosTab} component={TorneosMap} />
        <TabStack.Screen name={TabRoute.HomeTab} component={HomeMap} />
        <TabStack.Screen name={TabRoute.ClubesTab} component={ClubesMap} />
        <TabStack.Screen name={TabRoute.PerfilTab} component={PerfilMap} />
      </TabStack.Navigator>

    </>
  );
};

export default AutenticadoScreens;
