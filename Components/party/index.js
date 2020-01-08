import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';

export default class Menu extends Component {
    constructor(props){
        super(props)
    }


static navigationOptions = {
        title: 'Party',
        headerStyle: {
          backgroundColor: '#676568',
        },
        headerTintColor: '#fff',
        headerTitleStyle : {textAlign: 'center',alignSelf:'center', fontFamily : "roboto"}
      };

      handleOnPress() {
        this.props.navigation.navigate('DiceApp')
    }

      render() {
        const { navigate } = this.props.navigation
          return(
              <View style={styles.container}>
                  <TouchableOpacity onPress={() => navigate('DiceApp')}>
                    <Image style={styles.picture} source={require('../menu/Image/dice.jpg')}/>
                  </TouchableOpacity>                   
              </View>
          )
      }
}

const styles = StyleSheet.create({
    picture: {
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
      width: 735,
      height:150

    },
    container: {
        flex:1
    }
  });