import { createStackNavigator } from 'react-navigation';

import Hello from './components/Hello'

export default createStackNavigator ({
  Home: {
    screen: Hello
  }
})