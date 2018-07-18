import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
  PRIMARY_COLOR: '#FFBA00',
  SHADOW_COLOR: 'rgba(184, 184, 184, 0.5)',
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height
}