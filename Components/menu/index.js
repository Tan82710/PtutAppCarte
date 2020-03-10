import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class Menu extends Component {
    constructor(props){
        super(props)
    }


static navigationOptions = {
        title: 'Menu',
        headerStyle: {
          backgroundColor: '#676568',
        },
        headerTintColor: '#fff',
        headerTitleStyle : {textAlign: 'center',alignSelf:'center', fontFamily : "roboto"}
      };

      handleOnPress() {
        this.props.navigation.navigate('Party')
    }

      render() {
        const { navigate } = this.props.navigation
          return(
              <View style={styles.container}>
                  <TouchableOpacity onPress={() => navigate('Party')}>
                    <Image style={styles.picture} source={require('./Image/party.jpg')}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={styles.picture} source={require('./Image/soft.jpg')}/>
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
      width: 400,
      height:350

    },
    container: {
      flexDirection: 'row',
      flex:1,
      justifyContent: 'center'
    }
  });