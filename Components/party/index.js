import React, { Component } from 'react';
import {Text, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Button } from 'react-native';


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
        this.props.navigation.navigate('Pseudo')
    }

      render() {
        const { navigate } = this.props.navigation
          return(
              <View style={styles.container}>

                <TouchableOpacity onPress={() => navigate('DiceApp')}>
                  <Image style={styles.picture} source={require('../menu/Image/dice.jpg')}/>
                </TouchableOpacity>
        
                <TouchableOpacity onPress={() => navigate('Pseudo')}>
                  <Image style={styles.picture} source={require('../menu/Image/pyramide.jpg')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={styles.picture} source={require('../menu/Image/autoroute.jpg')}/>
                </TouchableOpacity>
 
              </View>
          )
      }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignContent: 'space-around',
    alignItems: 'center'
},
    picture: {
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: 'center',
      width: 240,
      height:280,
      opacity: 0.7

    },
    button: {
      position: "absolute",
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 

    }
  });