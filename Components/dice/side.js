import React from 'react'
import {Image} from 'react-native'
 
export const SideOne = props =>
  <Image
    style={{margin:20, width: 200, height: 200 }}
    source={require('./diceImg/un.png')}
  />

export const SideTwo = props =>
  <Image
    style={{margin:20, width: 200, height: 200 }}
    source={require('./diceImg/deu.png')}
  />

export const SideThree = props =>
  <Image
    style={{margin:20, width: 200, height: 200 }}
    source={require('./diceImg/trois.png')}
  />

export const SideFour = props =>
  <Image
    style={{margin:20, width: 200, height: 200 }}
    source={require('./diceImg/quatre.png')}
  />

export const SideFive = props =>
  <Image
    style={{margin:20, width: 200, height: 200 }}
    source={require('./diceImg/cinq.png')}
  />

export const SideSix = props =>
  <Image
    style={{margin:20, width: 200, height: 200 }}
    source={require('./diceImg/six.png')}
  />
