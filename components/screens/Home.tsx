import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation'

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
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})