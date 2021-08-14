import React from 'react'
import { Text, Platform } from 'react-native'
import estilo from './Estilo'

export default props => {
    if (Platform.OS === 'android') {
        return <Text style={estilo.fontG}>Android</Text>

    } else if (Platform.OS === 'iOS') {
        return <Text style={estilo.fontG}>iOS</Text>

    } else {
        return <Text style={estilo.fontG}>Eita!!!</Text>
    }

}