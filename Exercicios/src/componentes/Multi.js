import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

export default function () {
    return <Text style={Estilo.fontG}>Comp oficial</Text>
}
export function Comp1() {
    return <Text style={Estilo.fontG}>Comp #01</Text>
}
export function Comp2() {
    return <Text style={Estilo.fontG}>Comp #02</Text>
}