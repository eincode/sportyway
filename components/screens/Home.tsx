import React from 'react'
import { View, StyleSheet, StatusBar, TouchableOpacity, Text, Image } from 'react-native'
import { NavigationScreenProp, NavigationTabScreenOptions } from 'react-navigation'
import metrics from '../../config/metrics'

const HOME_ICON_ACTIVE = require('../../assets/ic_home_active.png')
const HOME_ICON_INACTIVE = require('../../assets/ic_home_inactive.png')

const MapView = require('../MapView')

interface Props {
  navigation: NavigationScreenProp<any, any>
}

interface State {

}

export default class Home extends React.Component<Props, State> {

  static navigationOptions: NavigationTabScreenOptions = {
    title: 'Home',
    tabBarIcon: ({ focused }) => {
      switch (focused) {
        case true: return (
          <Image source={HOME_ICON_ACTIVE} style={metrics.TAB_BAR_ICON_STYLE} resizeMode={'contain'}/>
        )
        case false: return (
          <Image source={HOME_ICON_INACTIVE} style={metrics.TAB_BAR_ICON_STYLE} resizeMode={'contain'}/>
        )
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'}/>
        <MapView style={{ flex: 1 }} />
        <FloatingActionButton onPress={() => this.props.navigation.navigate('NewEvent')}/>
      </View>
    )
  }

}

interface FloatingActionButtonProps {
  onPress: () => void
}

class FloatingActionButton extends React.Component<FloatingActionButtonProps> {

  render() {
    return (
      <TouchableOpacity style={styles.fab} onPress={this.props.onPress}>
        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fab: {
    position: 'absolute',
    bottom: 10,
    left: metrics.DEVICE_WIDTH / 2 - 25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: metrics.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: metrics.SHADOW_COLOR,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 5,
		shadowOpacity: 1,
		elevation: 5,

  }
})