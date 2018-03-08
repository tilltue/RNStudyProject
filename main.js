import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet,Image } from 'react-native'
import { SafeAreaView, Button, FlatList, Dimensions } from 'react-native';

import { connect } from 'react-redux'
import { fetchData } from './actions'
const { width, height } = Dimensions.get('window');
const equalWidth =  (width / 3)

let styles

const Main = (props) => {
  const {
    container,
    header,
    profileLayout,
    profileDescriptionLayout,
    buttonStyle,
    safeArea
  } = styles

  _keyExtractor = (item, index) => item

  renderRowItem = (src) => {
    console.log(src.item)
      return (
        <View>
          <Image style={{ height: equalWidth,  width : equalWidth, marginVertical: 1, marginHorizontal: 1}} source={{uri: src.item[0]}} resizeMode='cover' />
        </View>
      )
  }

  renderHeader = () => {
    return <View style={header}>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
      <View style={profileLayout}>
        <Image
          style={{width:70, height: 70, borderRadius: 35}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
      </View>
      <View style={profileDescriptionLayout}>
        <View style={{flex: 1.5, flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>3,169</Text>
            <Text>게시물</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>449</Text>
            <Text>팔로워</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>688</Text>
            <Text>팔로잉</Text>
          </View>
        </View>
        <View style={{flex: 0.6, flexDirection: 'row', justifyContent: 'center', marginHorizontal: 5, marginVertical: 5}}>
          <View style={[{width: '70%', marginRight: 5},buttonStyle]}>
            <Button onPress={() => props.fetchData()} title="메시지" color="#000000" accessibilityLabel="Learn more about this purple button"/>
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
    <View style={{flex: 1, flexDirection: 'row', marginVertical: 5}}>
      <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 10}}>
        <Text style={{fontWeight: 'bold'}}>React Native</Text>
        <Text>react.io/@react-native</Text>
      </View>
    </View>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
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

  return (
    <SafeAreaView style={container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={props.appData.data.map((item,i) => {
          return item.pagemap.cse_thumbnail.map( (thumb,j) => {
            return thumb.src
          })
        })}
        numColumns={3}
        keyExtractor={_keyExtractor}
        renderItem={renderRowItem}
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
  )
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  profileLayout: {
    flex: 1,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileDescriptionLayout: {
    flex: 3,
    height: 90,
  },
  buttonStyle: {
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    borderWidth: 0.5,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#000000'
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
