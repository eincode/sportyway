import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  tabBarIcon: {
    height: 25,
    width: 25,
  }
})

export default {
  PRIMARY_COLOR: '#FFBA00',
  SHADOW_COLOR: 'rgba(184, 184, 184, 0.5)',
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  TAB_BAR_ICON_STYLE: styles.tabBarIcon
}