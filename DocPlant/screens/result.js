import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Result from '../components/result'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const { height, width } = Dimensions.get('window')
class Results extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Result',
    headerStyle: {
      backgroundColor: 'rgb(59, 133, 5)',
      borderBottomWidth: 0,

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: (
      <TouchableOpacity
        style={{ width: 30, color: "#fff", paddingLeft: 10 }}
        onPress={() => navigation.openDrawer()}>
        <Icon name={Platform.OS === "ios" ? "ios-menu" : "md-menu"} size={30} style={{ color: "#fff" }} />
      </TouchableOpacity>
    ),
  })
  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }


  render() {
    const { navigation: { navigate }, data, notFound, youtubes } = this.props
    const { history, recommend } = data
    let imagePlant, fixLabelPlant, listVideos
    if (history) {
      const { image, labelId } = history
      imagePlant = image
      listVideos = youtubes
      const { diseaseId: { name }, fixLabel } = labelId
      fixLabelPlant = fixLabel
    }

    return (
      <View style={{ flex: 1 }}>
      {notFound ?
      
      <View>
      <ImageBackground source={require('../assets/notFound2.png')} style={{ width: '100%', height: '100%', }}>
        <View style={styles.gifImage}> 
        <Image
          style={styles.drawerImage}
          source={require('../assets/notFound.gif')} />
        </View>
      </ImageBackground>
      </View>
      : (
        <View style={{ flex: 1 }}>
        {history.labelId.diseaseId.name === 'Healthy' ? 
          <View>
            <ImageBackground source={require('../assets/healty.png')} style={{ width: '100%', height: '100%', }}>
              <View style={styles.gifImageHealth}> 
              <Image
                style={styles.drawerHealth}
                source={require('../assets/healty.gif')} />
              </View>
            </ImageBackground>
          </View> 
        :
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
            <View style={{ marginTop: 5, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                {fixLabelPlant}
              </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                {fixLabelPlant.split(' ')[0]}
              </Text>
              <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                <Image
                  style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                  source={{ uri: imagePlant, isStatic: true }}
                />
              </View>
            </View>
            <Text style={{ marginTop: 25, fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
              Treatment Recommendations
                          </Text>
            <View style={{ height: 190, marginTop: 15 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {recommend.map(r => (
                  <TouchableOpacity
                    key={r._id}
                    onPress={() => {
                      navigate('Detail', {recommend: r, user: history.userId.fullname, youtubes: listVideos})
                    }}>
                    <Result imageUri={r.imageUrl}
                      name={r.content.split(' ')[0] + '...'}
                    />
                  </TouchableOpacity>
                ))
                }
              </ScrollView>
            </View>

          </View>
        </ScrollView>
        }
      </View>
      )
    }
        
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.content.data,
  notFound: state.content.notFound,
  youtubes: state.content.youtubes
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Results)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
  gifImage: {
    paddingTop: (height/2) + 100
  },
  gifImageHealth: {
    paddingTop: (height/2) + 40
  },
  drawerHealth: {
    height: '100%',
    width: "100%",
  },
  drawerImage: {
    height: '100%',
    width: "100%",
    }
});