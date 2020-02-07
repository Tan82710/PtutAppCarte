import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Affichage extends Component {
    constructor(props) {
      super(props);
    }
    
    render() {
    const { pseudo } = this.props
    console.log("MyProps:"+this.props)
    return (
          <View style={styles.view}>
            <Text style={styles.text}>{pseudo}</Text>   
          </View>
    );
  }
}

const styles = StyleSheet.create({
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