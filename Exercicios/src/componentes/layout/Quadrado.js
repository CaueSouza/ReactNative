import React from 'react'
import { Text, View } from 'react-native'
import estilo from '../Estilo'

export default props => {
    const lado = props.lado || 50
    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }}>

        </View>
    )
}