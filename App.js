import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';

export default class App extends React.Component {
  onPressLearnMore() {

  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.profileLayout}>
        <Image
          style={{width:70, height: 70, borderRadius: 35}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        </View>
        <View style={styles.profileDescriptionLayout}>
          <View style={{flex: 1.5, flexDirection: 'row', backgroundColor: 'powderblue'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00cec9'}}>
              <Text style={styles.countText}>3,169</Text>
              <Text>게시물</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fab1a0'}}>
              <Text style={styles.countText}>449</Text>
              <Text>팔로워</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00cec9'}}>
              <Text style={styles.countText}>688</Text>
              <Text>팔로잉</Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'skyblue'}}>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffeaa7'}}>
              <Button style={styles.buttonStyle} onPress={this.onPressLearnMore} title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button"/>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fdcb6e'}}>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffeaa7'}}>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },
  profileLayout: {
    flex: 1,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7675',
  },
  profileDescriptionLayout: {
    flex: 3,
    height: 90,
    backgroundColor: '#a29bfe',
  },
  countText: {
    fontWeight: 'bold',
  },
  buttonStyle: {
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  }
  safeArea: {
    flex: 1,
    backgroundColor: '#000000'
  }
});
