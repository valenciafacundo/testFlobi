import React from 'react'
import { ClubesRoute, ClubesStack } from '../routing/routes'
import Club from '../screens/clubes/Club'
import Clubes from '../screens/clubes/Clubes'
import ClubesTab from '../assets/iconos-home/club_mono.png'
const ClubesMap = () => {
  return (
    <>
      <ClubesStack.Navigator
        screenOptions={{
          title: 'Clubes',
          tabBarIcon: () => <ClubesTab />,
          tabBarOnPress: ({ navigation }) => {
            navigation.popToTop();
           ;
          }
        }}>
        <ClubesStack.Screen
          name={ClubesRoute.ClubScreen}
          component={Club} />
        <ClubesStack.Screen
          name={ClubesRoute.ClubesScreen}
          component={Clubes}
        />
      </ClubesStack.Navigator>
    </>
  )
}

export default ClubesMap