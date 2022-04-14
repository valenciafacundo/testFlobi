import React from 'react'
import { HomeStack,HomeRoute } from '../routing/routes'
import CrearAnuncio from '../screens/home/CrearAnuncio'
import Home from '../screens/home/Home'
import Likes from '../screens/home/Likes'
import Matches from '../screens/home/Matches'
import MesaDetalle from '../screens/home/MesaDetalle'
const HomeMap = () => {
  return (
    <>
      <HomeStack.Navigator 
      screenOptions={{headerShown: false,}}
      initialRouteName={HomeRoute.HomeScreen}
      >
        <HomeStack.Screen
        name={HomeRoute.HomeScreen}
        component={Home}
        />
        <HomeStack.Screen
          name={HomeRoute.CrearAnuncioScreen }
          component={CrearAnuncio}
        />
         <HomeStack.Screen
          name={HomeRoute.LikesScreen }
          component={Likes }
        />
         <HomeStack.Screen
          name={HomeRoute.MatchesScreen }
          component={ Matches}
        />
         <HomeStack.Screen
          name={HomeRoute.MesaDetalleScreen }
          component={MesaDetalle }
        />
      </HomeStack.Navigator>
    </>
  )
}

export default HomeMap