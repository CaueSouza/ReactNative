import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

export default ({ min, max }) => {
    const random = Math.floor(Math.random() * (max - min) + min)
    return (
        <Text style={Estilo.fontG}>
            O valor aleatorio é {random}!
        </Text>
    )
}