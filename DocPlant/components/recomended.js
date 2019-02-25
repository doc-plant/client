import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

class Recomended extends Component {
    render() {
        return (
            <View style={{ height: 230, width: 140, marginLeft: 35, borderColor: '#dddddd', borderRadius: 10, alignItems: 'center'}}>
                <View style={{
                    width: 100, 
                    height: 40,
                    backgroundColor: "#009900", 
                    zIndex: 2, 
                    position: "relative", 
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10
                }}>
                <Text style={{ fontSize: 20, fontWeight: '700', color:"white" }}>{this.props.name}</Text>
                </View>
                <View style={{ zIndex: 1, 
                    width: 140, height: 170,
                    position: "absolute",
                    marginTop:25 , 
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: '#dddddd'
                }}>
                    <Image style={{width: 120, height: 130, marginTop:30, marginBottom:10, marginLeft:10}} source={{ uri: `${this.props.imageUri}` }}/>
                </View>
            </View>
        );
    }
}
export default Recomended;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});