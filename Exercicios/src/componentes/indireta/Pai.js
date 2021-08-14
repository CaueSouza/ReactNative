import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'
import Filho from './Filho'

export default props => {
    const [text, setText] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, text) {
        setNum(numero)
        setText(text)
    }

    return (
        <>
            <Text style={Estilo.fontG}>
                {text}{num}
            </Text>
            <Filho
                min={1}
                max={60}
                func={exibirValor} />
        </>
    )
}