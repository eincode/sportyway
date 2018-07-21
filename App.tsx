import React from 'react'
import { createStackNavigator, createBottomTabNavigator, TabBarBottom } from 'react-navigation'

// Tab navigator screens
import Home from './components/screens/Home'
import History from './components/screens/History'

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
    Home: { screen: Home },
    History: { screen: History }
  },
  {
    tabBarOptions: {
      activeTintColor: metrics.PRIMARY_COLOR,
      inactiveTintColor: '#909090',
      showIcon: true,
      style: {
        backgroundColor: 'white'
      }
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
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
