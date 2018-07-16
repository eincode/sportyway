import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from './components/screens/Home'
import metrics from './config/metrics'

export default class App extends React.Component<any, any> {

  render() {
    return(
      <Navigator />
    )
  }

}

const Navigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: metrics.PRIMARY_COLOR
      },
      headerTintColor: 'white'
    }
  }
)
