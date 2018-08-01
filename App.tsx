import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

// Tab navigator screens
import Home from './components/screens/Home'
import History from './components/screens/History'
import Profile from './components/screens/Profile'

// Stack screens
import NewEvent from './components/screens/NewEvent'

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
    History: { screen: History },
    Profile: { screen: Profile }
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
    Tab: { screen: TabBar },
    NewEvent: { screen: NewEvent }
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
