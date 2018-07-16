import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation'

interface Props {
  navigation: NavigationScreenProp<any, any>
}

interface State {

}

export default class Home extends React.Component<Props, State> {

  static navigationOptions: NavigationStackScreenOptions = {
    title: 'Sportyway'
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'}/>
        <Text>Home Screen</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})