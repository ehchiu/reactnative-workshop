import React, { Component } from 'react';
import VideoList from './video_list.js';

import {
    NavigatorIOS,
    View,
    Text,
    StatusBar,
    StyleSheet
  } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <NavigatorIOS
          style={styles.container}
          translucent={false}
          barTintColor='#7c5251'
          titleTextColor='white'
          tintColor='white'
          initialRoute={{
          title: 'Featured Videos',
          component: VideoList,
          }}
        />
    </View>
  );
  }
}

module.exports = Search;
