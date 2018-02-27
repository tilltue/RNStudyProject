import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, FlatList,Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const equalWidth =  (width / 3)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  _keyExtractor = (item, index) => item;

  renderRowItem = (photos) => {
      return (
        <View>
          <Image style={{ height: equalWidth,  width : equalWidth, marginVertical: 1, marginHorizontal: 1}} source={require('./images/photo.jpg')} resizeMode='cover' />
        </View>
      )
  }

  componentWillMount() {
    //여기서 async load 를 함.
    {this.getMoviesFromApiAsync()}
  }

  getMoviesFromApiAsync = () => {
      this.state.photos = ['1','2','3','4','5','6','7','8','9','10',
                           '21','22','23','24','25','26','27','28','29','210',
                           '31','32','33','34','35','36','37','38','39','310']
  }

  onPressLearnMore() {

  }

  renderHeader = () => {
    return <View style={styles.header}>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#fff'}}>
      <View style={styles.profileLayout}>
        <Image
          style={{width:70, height: 70, borderRadius: 35}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
      </View>
      <View style={styles.profileDescriptionLayout}>
        <View style={{flex: 1.5, flexDirection: 'row', backgroundColor: 'powderblue'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00cec9'}}>
            <Text style={{fontWeight: 'bold'}}>3,169</Text>
            <Text>게시물</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fab1a0'}}>
            <Text style={{fontWeight: 'bold'}}>449</Text>
            <Text>팔로워</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00cec9'}}>
            <Text style={{fontWeight: 'bold'}}>688</Text>
            <Text>팔로잉</Text>
          </View>
        </View>
        <View style={{flex: 0.6, flexDirection: 'row', backgroundColor: 'skyblue', justifyContent: 'center', marginHorizontal: 5, marginVertical: 5}}>
          <View style={[{width: '70%', marginRight: 5},styles.buttonStyle]}>
            <Button onPress={this.onPressLearnMore} title="메시지" color="#000000" accessibilityLabel="Learn more about this purple button"/>
          </View>
          <View>
            <Image source={require('./images/follow.png')} style={{height: '100%', aspectRatio: 1.5, borderRadius:2, borderWidth: 0.5, borderColor: '#D8D8D8', marginRight: 5}} resizeMode='stretch'></Image>
          </View>
          <View>
            <Image source={require('./images/dropdown.png')} style={{height: '100%', aspectRatio: 1, borderRadius:2, borderWidth: 0.5, borderColor: '#D8D8D8'}} resizeMode='stretch'></Image>
          </View>
        </View>
      </View>
    </View>
    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'powderblue', marginVertical: 5}}>
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#00cec9', marginHorizontal: 10}}>
        <Text style={{fontWeight: 'bold'}}>React Native</Text>
        <Text>react.io/@react-native</Text>
      </View>
    </View>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'powderblue'}}>
      <View style={{flex: 1, height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginVertical: 5}}>
        <Image source={require('./images/grid.png')} style={{height: '75%', aspectRatio: 1}} resizeMode='stretch'></Image>
      </View>
      <View style={{flex: 1, height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginVertical: 5}}>
        <Image source={require('./images/list.png')} style={{height: '75%', aspectRatio: 1}} resizeMode='stretch'></Image>
      </View>
      <View style={{flex: 1, height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginVertical: 5}}>
        <Image source={require('./images/comment.png')} style={{height: '75%', aspectRatio: 1}} resizeMode='stretch'></Image>
      </View>
    </View>
          </View>
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          data={this.state.photos}
          numColumns={3}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRowItem}
        />
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.5}}/>
        <View style={{height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'powderblue'}}>
          <View style={{flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginVertical: 5}}>
            <Image source={require('./images/home.png')} style={{height: '50%', aspectRatio: 1}} resizeMode='cover'></Image>
          </View>
          <View style={{flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginVertical: 5}}>
            <Image source={require('./images/search.png')} style={{height: '50%', aspectRatio: 1}} resizeMode='cover'></Image>
          </View>
          <View style={{flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginVertical: 5}}>
            <Image source={require('./images/post.png')} style={{height: '50%', aspectRatio: 1}} resizeMode='cover'></Image>
          </View>
          <View style={{flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginVertical: 5}}>
            <Image source={require('./images/like.png')} style={{height: '50%', aspectRatio: 1}} resizeMode='cover'></Image>
          </View>
          <View style={{flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginVertical: 5}}>
            <Image source={require('./images/profile.png')} style={{height: '50%', aspectRatio: 1}} resizeMode='cover'></Image>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    flexDirection: 'column',
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
  buttonStyle: {
    alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffeaa7',
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#D8D8D8'
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#000000'
  }
});
