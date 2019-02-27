import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import HTML from 'react-native-render-html';

class Video extends Component {
  state = {
    embedUri: "ysbeEQWXbA8?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com",
  }

    render() {
        const { VideoUri, Videoname } = this.props
        console.log(VideoUri, Videoname)
        return (
            <View style={{ height: 280, width: 320, marginLeft: 20, borderColor: '#dddddd', borderRadius: 10, alignItems: 'center', shadowColor:"black"
          }}>
                <View style={{
                    width: 320, 
                    height: 30,
                    backgroundColor: "#009900", 
                    zIndex: 2, 
                    position: "relative", 
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text style={{ fontSize: 14, color:'white' }}>{Videoname}</Text>
                </View>
                <HTML style={{ 
                    zIndex: 1, 
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: '#dddddd'
                   }} html={`<iframe width="320" height="170"  src="https://www.youtube.com/embed/${VideoUri}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"></iframe>
                `} />
        
                {/* </View> */}
            </View>
        );
    }
}
export default Video;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});