import React, { Component } from 'react';
import {Text, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Button, FlatList } from 'react-native';
//import Affichage from './affichage'
import { StackNavigator } from 'react-navigation';
import { ThemeConsumer } from 'styled-components';
import {AsyncStorage} from 'react-native';


export default class Room extends Component {

    constructor(props){
        super(props)
        //this.state={user:[]}
        //this.state = {user: this.props.navigation.getParam('index', 'No-ID')}
        this.state={user:[]}
        this.dataUser()
        console.log("state:" + this.state)
        this._recuperationData()
        
    }

    Affichage({pseudo}) {

      const DATA = [{
        pseudo : this.state
      }]

      return(
      <View style={styles.view}>
        <Text style={styles.text}>{pseudo}</Text>
      </View>
      )
    }

    dataUser() {
      const data = this.props.navigation.state.params.user
      //this.setState({data})
      this.state = data
      console.log('mon pseudo :' + data)
    }

static navigationOptions = {
        title: 'Room',
        headerStyle: {
          backgroundColor: '#676568',
        },
        headerTintColor: '#fff',
        headerTitleStyle : {textAlign: 'center',alignSelf:'center', fontFamily : "roboto"}
      };

      handleOnPress() {
        this.props.navigation.navigate('DiceApp')
    }

    _recuperationData = async() => {
      try {
        const value = await AsyncStorage.getItem(this.state)
        if (value !== null){
          console.log('Ma value:' + value)
        }
      }catch(error){

      }
    }



    //{JSON.stringify(navigation.getParam('user'))}

    /*<Text>
    PSEUDO :
     {this.props.navigation.state.params.user ? this.props.navigation.state.params.user : 'No value passed'}
  </Text>
  
    <FlatList data = {user}
              renderItem={({item})=>
              <Affichage name={item.pseudo}/>
              }/>
  */

      render() {
    
        const { navigate } = this.props.navigation
 
            return(
              <View style={styles.container}>

              <FlatList data = {[{pseudo : this.state, key: 'pseudo1'}]}
              renderItem={({item}) =>

              <View style={styles.view}>
                <Text>{item.pseudo}</Text>
              </View>

              }/>

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

    },
    text: {
      color: "white",
      fontSize: 14,
      width: "45%"
    },
    view: {
      backgroundColor: "#FF8927",
      padding: 20,
      marginHorizontal: 16,
      marginVertical: 8,
    }
  });