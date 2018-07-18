import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation'

import HistoryItem from '../HistoryItem'

interface Props {
  navigation: NavigationScreenProp<any, any>
}

interface State {
  isLoading: Boolean
}

export default class History extends React.Component<Props, State> {
  
  static navigationOptions: NavigationStackScreenOptions = {
    title: 'History'
  }

  render() {
    return(
      <View style={styles.container}>
        <HistoryItem name={'Futsal Bareng'} address={'Jl. Kenangan Terindah No. 1'} date={'6 Mei 2018'}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  }
})