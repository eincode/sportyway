import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { NavigationScreenProp, NavigationTabScreenOptions } from 'react-navigation'

import HistoryItem from '../HistoryItem'
import metrics from '../../config/metrics'

const HISTORY_ICON_ACTIVE = require('../../assets/ic_history_active.png')
const HISTORY_ICON_INACTIVE = require('../../assets/ic_history_inactive.png')

interface Props {
  navigation: NavigationScreenProp<any, any>
}

interface State {
  isLoading: Boolean
}

export default class History extends React.Component<Props, State> {
  
  static navigationOptions: NavigationTabScreenOptions = {
    title: 'History',
    tabBarIcon: ({ focused }) => {
      switch (focused) {
        case true: return (
          <Image source={HISTORY_ICON_ACTIVE} style={metrics.TAB_BAR_ICON_STYLE} resizeMode={'contain'}/>
        )
        case false: return (
          <Image source={HISTORY_ICON_INACTIVE} style={metrics.TAB_BAR_ICON_STYLE} resizeMode={'contain'}/>
        )
      }
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <HistoryItem name={'Futsal Bareng'} address={'Jl. Kenangan Terindah No. 1'} date={'6 Mei 2018'}/>
        <HistoryItem name={'Futsal Bareng'} address={'Jl. Kenangan Terindah No. 1'} date={'6 Mei 2018'}/>
        <HistoryItem name={'Futsal Bareng'} address={'Jl. Kenangan Terindah No. 1'} date={'6 Mei 2018'}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
  }
})