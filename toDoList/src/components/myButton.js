import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class MyButton extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress = {this.props.onPress} style={{flex:1}}>
                <Image source={require('../images/myButton.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}