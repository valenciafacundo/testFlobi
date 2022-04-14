import React from 'react'
import { MensajesStack, MensajesRoute } from '../routing/routes'
import Chat from '../screens/mensajes/Chat'
import Mensajes from '../screens/mensajes/Mensajes'
const MensajesMap = () => {
    return (
        <>
            <MensajesStack.Navigator>
                <MensajesStack.Screen name={MensajesRoute.MensajesScreen}
                    component={Mensajes} />
                <MensajesStack.Screen name={MensajesRoute.ChatScreen}
                    component={Chat} />
            </MensajesStack.Navigator>
        </>
    )
}

export default MensajesMap