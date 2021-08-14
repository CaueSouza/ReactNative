import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Mega from './componentes/mega/Mega'
// import DigiteSeuNome from './componentes/DigiteSeuNome'
// import FlexboxV1 from './componentes/layout/FlexboxV1'
// import FlexboxV2 from './componentes/layout/FlexboxV2'
// import FlexboxV3 from './componentes/layout/FlexboxV3'
// import FlexboxV4 from './componentes/layout/FlexboxV4'
// import Quadrado from './componentes/layout/Quadrado'
// import ListaProdutosV2 from './componentes/produtos/ListaProdutosV2'
// import ListaProdutos from './componentes/produtos/ListaProdutos'
// import Familia from './componentes/relacao/Familia'
// import Membro from './componentes/relacao/Membro'
// import UsuarioLogado from './componentes/UsuarioLogado'
// import Pai from './componentes/indireta/Pai'
// import Titulo from './componentes/Titulo'
// import MinMax from './componentes/MinMax'
// import Aleatorio from './componentes/Aleatorio'
// import CompPadrao, { Comp1, Comp2 } from './componentes/Multi'
// import Primeiro from './componentes/Primeiro'
// import Botao from './componentes/Botao'
// import Contador from './componentes/Contador'
// import ContadorV2 from './componentes/contador/ContadorV2'
// import Diferenciar from './componentes/Diferenciar'
// import ParImpar from './componentes/ParImpar'

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdNum={7} />
        {/* 
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} />
        <UsuarioLogado usuario={{ nome: 'Ana' }} />
        <UsuarioLogado usuario={{ email: 'carlos@empresa.com' }} />
        <UsuarioLogado usuario={null} />
        <UsuarioLogado usuario={{}} />
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia>
        <ParImpar num={3} />
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Contador inicial={0} passo={5} />
        <Contador />
        <Botao />
        <Titulo principal="Cadastro do Produto"
            secundario="Tela de Cadastro de Produto" />
        <Aleatorio min={50} max={100} />
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})