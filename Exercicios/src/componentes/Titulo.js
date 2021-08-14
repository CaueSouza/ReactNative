import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

export default props => (
    <>
        <Text style={Estilo.fontG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
)
