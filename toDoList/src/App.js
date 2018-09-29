/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {MyButton} from './components/index';
type Props = {};
const items = [];
export default class App extends Component<Props> {
  constructor(probs){
    super(probs);
    this.addItem = this.addItem.bind(this);
  }
  state = {
    toDo : '',
  }
  addItem(){
    //console.warn('App:addItem',this.state.toDo);
    this.setState({toDo : '' })
    items.push(this.state.toDo)
  }
  renderItem(item){
      return(
        <View key = {item} style={{backgroundColor:'#fad390',flex:1,margin:8,borderRadius:5,borderColor:'black',borderWidth:3}}>
            <Text style = {{fontSize:20,color:'red',padding:2,textAlign:'center'}}>
              {item}
            </Text>
        </View>
      );
  }
  render() {
    return (
      <View style={{flex:5}}>
        <View style={{flex:1,backgroundColor:'#0c2461',flexDirection:'row'}}>
             <View style={{flex:6,backgroundColor:'transparent',justifyContent:'center'}}>
                  <TextInput value={this.state.toDo} resizeMode = {false} onChangeText = {(v) => this.setState({toDo : v})} 
                  style={{fontSize:24,marginLeft:20,marginRight:20,flex:1,color:'white'}}
                  placeholder="Yapılacakları girin!" 
                  placeholderTextColor='#e55039'>
                  </TextInput>
             </View>
             <View style={{flex:1,backgroundColor:'#079992'}}>
                  <MyButton onPress={this.addItem}></MyButton>
             </View>
        </View>
        <View style={{flex:8,backgroundColor:'#82ccdd'}}>
           <ScrollView>
             {
               items.map((item) => this.renderItem(item))
             }
           </ScrollView>
        </View>
      </View>
    );
  }
}


