import React from 'react'
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native'
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation'
import metrics from '../../config/metrics'

const MapView = require('../MapView')

interface Props {
  navigation: NavigationScreenProp<any, any>
}

interface State {

}

export default class Home extends React.Component<Props, State> {

  static navigationOptions: NavigationStackScreenOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'}/>
        <MapView style={{ flex: 1 }} />
        <FloatingActionButton />
      </View>
    )
  }

}

const FloatingActionButton = () => (
  <TouchableOpacity style={styles.fab}>
    <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fab: {
    position: 'absolute',
    bottom: 10,
    right: 10,
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