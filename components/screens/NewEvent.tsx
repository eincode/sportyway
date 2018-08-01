import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation'

import CustomTextInput from '../CustomTextInput'
import CustomButton from '../CustomButton'
import metrics from '../../config/metrics'

const MapView = require('../MapView')

const ICON_EVENT = require('../../assets/ic_calendar.png')
const ICON_SPORT = require('../../assets/ic_sport.png')
const ICON_LOCATION = require('../../assets/ic_marker.png')
const ICON_USER = require('../../assets/ic_user.png')
const ICON_NOTES = require('../../assets/ic_pencil.png')

interface Props {
  navigation: NavigationScreenProp<any, any>
}

export default class NewEvent extends React.Component<Props> {
  static navigationOptions: NavigationStackScreenOptions = {
    title: 'New Event'
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomTextInput icon={ICON_EVENT} placeholder={'Nama Acara'} />
        <CustomTextInput icon={ICON_SPORT} placeholder={'Jenis Olahraga'} />
        <CustomTextInput icon={ICON_LOCATION} placeholder={'Lokasi'} />
        <MapView style={styles.mapView} />
        <CustomTextInput icon={ICON_USER} placeholder={'Jumlah Peserta'} />
        <CustomTextInput icon={ICON_NOTES} placeholder={'Catatan (opsional)'} />
        <CustomButton label={'Buat Acara'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mapView: {
    marginVertical: 5,
    width: metrics.DEVICE_WIDTH * 0.95,
    height: 200
  }
})
