import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import estilo from '../Estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends Component {

    state = {
        qtdNum: this.props.qtdNum,
        numeros: []
    }

    alterarQtdNumero = (qtd) => {
        this.setState({ qtdNum: +qtd })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const { qtdNum } = this.state
        const numeros = []

        for (let i = 0; i < qtdNum; i++) {
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }

        numeros.sort((a, b) => a - b)

        this.setState({ numeros })
    }

    // METODOS EQUIVALENTES
    // gerarNumeros = () => {
    //     const numeros = Array(this.state.qtdNum)
    //         .fill()
    //         .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
    //         .sort((a, b) => a - b)
    //     this.setState({ numeros })
    // }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }
    render() {
        return (
            <>
                <Text style={estilo.fontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtd de Numeros"
                    value={`${this.state.qtdNum}`}
                    onChangeText={this.alterarQtdNumero}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}