import React from "react";
import { PerfilStack, PerfilRoute } from "../routing/routes";
import Perfil from "../screens/perfil/Perfil";
import ActualizarTelefono from "../screens/perfil/ActualizarTelefono";
import CodigoActualizar from "../screens/perfil/CodigoActualizar";
import Configuracion from "../screens/perfil/Configuracion";
import Notificaciones from "../screens/perfil/Notificaciones";
const PerfilMap = () => {
  return (
    <>
      <PerfilStack.Navigator>
        <PerfilStack.Screen
          name={PerfilRoute.PerfilScreen}
          component={Perfil}
        />
        <PerfilStack.Screen
          name={PerfilRoute.ActualizarTelefonoScreen}
          component={ActualizarTelefono}
        />
        <PerfilStack.Screen
          name={PerfilRoute.CodigoActualizarScreen}
          component={CodigoActualizar}
        />
        <PerfilStack.Screen
          name={PerfilRoute.ConfiguracionScreen}
          component={Configuracion}
        />
        <PerfilStack.Screen
          name={PerfilRoute.NotificationesScreen}
          component={Notificaciones}
        />
      </PerfilStack.Navigator>
    </>
  );
};

export default PerfilMap;
