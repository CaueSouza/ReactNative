import React, { Component } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './src/components/Header'
import params from './src/Params';
import LevelSelection from './src/screens/LevelSelection'
import MineField from './src/components/MineField';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/Functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  openField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeeeeu!', 'Que burro!!!')
    }

    if (won) {
      Alert.alert('Parabéns!', 'Você Venceu!!!')
    }

    this.setState({ board, lost, won })
  }

  selectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabéns!', 'Você Venceu!!!')
    }

    this.setState({ board, won })
  }

  levelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.container}>
        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.levelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })} />

        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })} />

        <View style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.openField}
            onSelectField={this.selectField} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
