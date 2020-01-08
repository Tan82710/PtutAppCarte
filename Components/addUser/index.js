import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'

export default class Input extends Component {
    constructor(props){
        super(props)
        this.state = {username: "", id: 0, items: []}
    }

    onChange(event) {
        this.setState({username: event.target.value})
        console.log(this.state)
    }

    input(event) {
        event.preventDefault()
        this.setState({items: [this.state.items, this.state.username, this.state.id + 1]})
        console.log(this.state)
    }


    render() {
          return(
              <View>
                <TextInput 
                value={this.state.username} 
                title="Pseudo"
                type="text"
                onChange={this.onChange.bind(this)}
                />

                <Button onClick={this.input.bind(this)} title='Valider'/>
              </View>
          )
    }
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })