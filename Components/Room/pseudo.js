import React, { Component } from 'react';
import {Text, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {AsyncStorage} from 'react-native';

var name = []

export default class Pseudo extends Component {

  state = {pseudo: ""}

    constructor(props){
        super(props)
    }


static navigationOptions = {
        title: 'Inscription',
        headerStyle: {
          backgroundColor: '#676568',
        },
        headerTintColor: '#fff',
        headerTitleStyle : {textAlign: 'center',alignSelf:'center', fontFamily : "roboto"}
      };

      handleOnPress() {
        this.props.navigation.navigate('Room')
    }

    /*valider = () => {
        name.push(this.state.pseudo.toString())
        console.log("Fonction Valider")
        console.log(name)
      }*/

      valider() {
        name.push(this.state.pseudo.toString())
        console.log("Fonction Valider")
        //console.log("Pseudo :" + this.state.pseudo)
        pseudo = this.state.pseudo
        this.props = pseudo
        console.log(this.props)
      }

      _storeData = async () => {
        try {
          await AsyncStorage.setItem(this.props)
        }catch (error){

        }
      }

      render() {
        const { pseudo } = this.state.pseudo
        const { navigate } = this.props.navigation
          return(
              <View style={styles.container}>
                    <TextInput
                        placeholder={"Insérer pseudo"}
                        value={pseudo}
                        onChangeText={pseudo => this.setState({pseudo})}
                    />

        <Button
          title="Validax"
          onPress={this.valider()}
          onPress={() => navigate('Room', {user: this.props})}
        />

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