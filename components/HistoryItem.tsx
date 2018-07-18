import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import metrics from '../config/metrics'

interface Props {
  name: String
  address: String
  date: String
}

export default class HistoryItem extends React.Component<Props, any> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          <View style={styles.photo} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentItem}>{this.props.name}</Text>
          <Text style={styles.contentItem}>{this.props.address}</Text>
          <Text style={styles.contentItem}>{this.props.date}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: metrics.DEVICE_WIDTH * 0.95,
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

  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey'
  },

  photoContainer: {
    flex: 1.25
  },

  contentContainer: {
    flex: 4
  },

  contentItem: {
    marginVertical: 2
  }
})
