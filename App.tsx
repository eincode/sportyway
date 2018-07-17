import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Home from './components/screens/Home'
import metrics from './config/metrics'

export default class App extends React.Component<any, any> {

  render() {
    return(
      <Navigator />
    )
  }

}

const TabBar = createBottomTabNavigator(
  {
    Home: { screen: Home }
  }
)

const Navigator = createStackNavigator(
  {
    Tab: { screen: TabBar }
  },
  {
    navigationOptions: {
      title: 'Sportyway',
      headerStyle: {
        backgroundColor: metrics.PRIMARY_COLOR
      },
      headerTintColor: 'white'
    }
  }
)
