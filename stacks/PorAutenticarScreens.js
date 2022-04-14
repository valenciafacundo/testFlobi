import React from 'react';
import { AuthStack, AuthRoute } from '../routing/routes';
import NumeroCelularIS from '../screens/auth/NumeroCelularIS';
import CodigoIS from '../screens/auth/CodigoIS'
import Registro from '../screens/auth/Registro'
import NumeroCelularRegistro from '../screens/auth/NumeroCelularRegistro'
import CodigoRegistro from '../screens/auth/CodigoRegistro'
import Pregunta1 from '../screens/auth/Pregunta1'
import Pregunta2 from '../screens/auth/Pregunta2'
import Pregunta3 from '../screens/auth/Pregunta3'
import Pregunta4 from '../screens/auth/Pregunta4'
import Pregunta5 from '../screens/auth/Pregunta5'
import NivelEstablecido from '../screens/auth/NivelEstablecido'
import ResolverAuth from '../screens/auth/ResolverAuth'
import OnBoarding from '../screens/auth/OnBoarding'
import UsuarioBloqueado from '../screens/auth/UsuarioBloqueado'
import InicioSesion from '../screens/auth/InicioSesion'
import ElegirDeporte from '../screens/auth/ElegirDeporte'

const PorAutenticarScreen = () => {
  return (
    <>
      <AuthStack.Screen
        name={AuthRoute.NumeroCelularIsScreen}
        component={NumeroCelularIS}
      />
      <AuthStack.Screen name={AuthRoute.CodigoIsScreen} component={CodigoIS} />
      //-----------------------------------------------//
      <AuthStack.Screen name={AuthRoute.RegistroScreen} component={Registro} />
      <AuthStack.Screen
        name={AuthRoute.CelularRegistroScreen}
        component={NumeroCelularRegistro}
      />
      <AuthStack.Screen
        name={AuthRoute.CodigoRegistroScreen}
        component={CodigoRegistro}
      />
      //-----------------------------------------------//
      <AuthStack.Screen
        name={AuthRoute.Pregunta1Screen}
        component={Pregunta1}
      />
      <AuthStack.Screen
        name={AuthRoute.Pregunta2Screen}
        component={Pregunta2}
      />
      <AuthStack.Screen
        name={AuthRoute.Pregunta3Screen}
        component={Pregunta3}
      />
      <AuthStack.Screen
        name={AuthRoute.Pregunta4Screen}
        component={Pregunta4}
      />
      <AuthStack.Screen
        name={AuthRoute.Pregunta5Screen}
        component={Pregunta5}
      />
      <AuthStack.Screen
        name={AuthRoute.NivelEstablecidoScreen}
        component={NivelEstablecido}
      />
      //-----------------------------------------------//
      <AuthStack.Screen
        name={AuthRoute.ResolverAuthScreen}
        component={ResolverAuth}
      />
      <AuthStack.Screen
        name={AuthRoute.OnBoardingScreen}
        component={OnBoarding}
      />
      <AuthStack.Screen
        name={AuthRoute.UsuarioBloqueadoScreen}
        component={UsuarioBloqueado}
      />
      <AuthStack.Screen
        name={AuthRoute.InicioSesionScreen}
        component={InicioSesion}
      />
      <AuthStack.Screen
        name={AuthRoute.ElegirDeporteScreen}
        component={ElegirDeporte}
      />
    </>
  );
};

export default PorAutenticarScreen;
