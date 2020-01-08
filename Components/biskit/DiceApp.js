import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'

import { Container, TouchContainer } from '../styles/styles'
import { SideThree, SideOne, SideTwo, SideFour, SideFive, SideSix } from '../dice/side'
import {DoubleN, Double6, Double5, Double1, Som10, Som11, Som7, Som5, Som9, NewPigeon, PigeonBois, Passe} from './strings'


export default class DiceApp extends Component {
    constructor(props) {
        super(props)
        this.state = { side1: 0, side2: 0, r:0, n:0}
        this._rollDice = this._rollDice.bind(this)
    }

    //Titre de la page
    static navigationOptions = {
        title: 'BISKIT',
        headerStyle: {
          backgroundColor: '#676568',
        },
        headerTintColor: '#fff',
        headerTitleStyle : {textAlign: 'center',alignSelf:'center', fontFamily : "roboto"}
      };
      



    _display(side1,side2) {
        if (side1 == side2 && side1+1 == 1){
            this.setState({r:3,n:1,side1:side1,side2:side2})
        } else if(side1 == side2 && side1+1 == 5){
            this.setState({r:2,n:5,side1:side1,side2:side2})
        } else if(side1 == side2 && side1 + 1 == 6){
            this.setState({r:1,n:6,side1:side1,side2:side2})
        } else if(side1 == 0 && side2 == 1 || side1 == 1 && side2 == 0){
            this.setState({r:9,n:2,side1:side1,side2:side2})
        } else if(side1 == side2){
            this.setState({r:0,n:side1+1,side1:side1,side2:side2})
        } else if(side1 + side2 +2 == 10){
            this.setState({r:7,n:2,side1:side1,side2:side2})
        }else if(side1 + side2+2 == 11){
            this.setState({r:8,n:2,side1:side1,side2:side2})
        }else if(side1 +side2+2 == 7){
            this.setState({r:5,n:2,side1:side1,side2:side2})
        }else if(side1 + side2+2 == 5){
            this.setState({r:4,n:2,side1:side1,side2:side2})
        }else if (side1 + side2+2 == 9){
            this.setState({r:6,n:2,side1,side2})
        }else{
            this.setState({r:11,n:0,side1:side1,side2:side2})
        }
    }

    _rollDice() {
        const side1 = Math.floor(Math.random() * 6)
        const side2 = Math.floor(Math.random() * 6)
        this._display(side1, side2)
    }

    render() {
        const Side1 = [SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix][this.state.side1]
        const Side2 = [SideOne, SideTwo, SideThree, SideFour, SideFive, SideSix][this.state.side2]
        const Phrase = [DoubleN, Double6, Double5, Double1, Som5, Som7,Som9, Som10, Som11, NewPigeon, PigeonBois, Passe][this.state.r]
        return (
            <Container>
                <Phrase name='Alextoy' nameS='AprèsAlextoy' nameP='AvantAlextoy' n={this.state.n} style={styles.message}/>
              <TouchContainer onPress={this._rollDice}>
                  <Side1 />
                  <Side2 />
              </TouchContainer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    message: {
      fontSize: 50
    },
  });