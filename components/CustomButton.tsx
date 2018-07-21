import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import metrics from '../config/metrics'

type Props = {
  label: String
} & Partial<DefaultProps>

type DefaultProps = Readonly<typeof defaultProps>

const defaultProps = {
  backgroundColor: metrics.PRIMARY_COLOR as String,
  onPress: () => console.log('Button pressed') as void
}

export default class CustomButton extends React.Component<Props> {

  static defaultProps = defaultProps
  
  render() {
    const backgroundColor = this.props.backgroundColor!
    return (
      <TouchableOpacity onPress={this.props.onPress} style={Object.assign({ backgroundColor: backgroundColor }, styles.button)}>
        <Text style={styles.label}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  button: {
    width: metrics.DEVICE_WIDTH * 0.95,
    height: 50,
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
    marginVertical: 5,
  },

  label: {
    color: 'white'
  }
})