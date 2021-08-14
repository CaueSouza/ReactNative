import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import estilo from './Estilo'

export default props => {
    const [nome, setNome] = useState('Teste')

    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}