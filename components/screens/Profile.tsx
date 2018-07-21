import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { NavigationScreenProp, NavigationTabScreenOptions } from 'react-navigation'
import metrics from '../../config/metrics'
import CustomButton from '../CustomButton'

const PROFILE_ICON_ACTIVE = require('../../assets/ic_profile_active.png')
const PROFILE_ICON_INACTIVE = require('../../assets/ic_profile_inactive.png')
const POINTS_ICON = require('../../assets/ic_points.png')

interface Props {
  navigation: NavigationScreenProp<any, any>
}

export default class Profile extends React.Component<Props, any> {

  static navigationOptions: NavigationTabScreenOptions = {
    title: 'Profile',
    tabBarIcon: ({ focused }) => {
      switch (focused) {
        case true: return (
          <Image source={PROFILE_ICON_ACTIVE} style={metrics.TAB_BAR_ICON_STYLE} resizeMode={'contain'}/>
        )
        case false: return (
          <Image source={PROFILE_ICON_INACTIVE} style={metrics.TAB_BAR_ICON_STYLE} resizeMode={'contain'}/>
        )
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.photo}/>
          <Text style={styles.name}>Ananta Pratama</Text>
          <Text style={styles.email}>deras.hujan15@gmail.com</Text>
          <Text>+6281330747579</Text>
          <View style={styles.pointsContainer}>
            <Image source={POINTS_ICON}/>
            <Text style={styles.pointsLabel}>Points</Text>
            <Text style={styles.pointsValue}>500</Text>
          </View>
        </View>
        <CustomButton label={'Ubah Profil'}/>
        <CustomButton label={'Keluar'} backgroundColor={'#D0021B'}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },

  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    width: metrics.DEVICE_WIDTH * 0.95,
    padding: 20,
    shadowColor: metrics.SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 5,
    marginBottom: 10,
  },

  photo: {
    backgroundColor: 'grey',
    height: 70,
    width: 70,
    borderRadius: 35,
    marginBottom: 10,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  
  email: {
    marginVertical: 5,
  },

  pointsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  pointsLabel: {
    fontSize: 17,
    marginLeft: 10,
  },

  pointsValue: {
    fontSize: 17,
    position: 'absolute',
    right: 0
  }
})