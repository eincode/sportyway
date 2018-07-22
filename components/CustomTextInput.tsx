import React from 'react'
import { View, StyleSheet, TextInput, Image, TextInputProps, ImageSourcePropType } from 'react-native'
import metrics from '../config/metrics'

interface Props extends TextInputProps {
  icon: ImageSourcePropType
}

export default class CustomTextInput extends React.Component<Props> {

  render() {
    return  (
      <View style={styles.container}>
        <Image source={this.props.icon} resizeMode={'contain'} style={styles.iconStyle}/>
        <TextInput { ...this.props } style={styles.textInput} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  iconStyle: {
    height: 20,
    width: 20,
    flex: 1,
    alignSelf: 'center',
  },

  container: {
    width: metrics.DEVICE_WIDTH * 0.95,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#979797',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },

  textInput: {
    flex: 5
  }
})