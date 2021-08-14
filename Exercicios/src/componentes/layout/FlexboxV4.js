import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import estilo from '../Estilo'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        width: 100,
        flexGrow: 1,
        backgroundColor: '#000'
    },
    V0: {
        backgroundColor: '#36c9a7',
        height: 300,
    },
    V1: {
        backgroundColor: '#ff801a',
        flexGrow: 3,
    },
    V2: {
        backgroundColor: '#dd22c1',
        flexGrow: 1,
    }
})